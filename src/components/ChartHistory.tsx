import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Artist } from "../Artists/data/Artist";
import ScatterChart from "../elements/ScatterChart";
import { getRecordsForArtist } from "../Records/api";
import { Record, Streak } from "../Records/data/Record";
import { getTrack } from "../Tracks/api/adapters/Spotify";
import { Track } from "../Tracks/data/Track";
import { useAnimationFrame } from "../utils/useAnimationFrame";

const AudioPlayer = dynamic(() => import("../components/Audio"), { ssr: false });

const getTopTrackForWeek = (currentWeek: number, records: Record[]): string => {
  const tracksInCurrentChart = records.filter((record: Record) => {
    return record.streaks.some((streak: Streak) => {
      return streak.offset <= currentWeek && streak.offset + streak.lengthInWeeks >= currentWeek;
    });
  });

  if (tracksInCurrentChart.length === 0) {
    return "";
  }
  const trackCurrentPositions = tracksInCurrentChart.map((record: Record) => {
    const currentStreak = record.streaks.find((streak: Streak) => {
      return streak.offset <= currentWeek && streak.offset + streak.lengthInWeeks >= currentWeek;
    });
    return currentStreak?.positions[currentWeek - currentStreak.offset] || 101;
  });
  const minValue = Math.min(...trackCurrentPositions);
  const minIndex = trackCurrentPositions.findIndex((value) => value === minValue);
  return tracksInCurrentChart[minIndex].trackId;
};

const ChartHistory = ({ artist }: { artist: Artist }) => {
  const [records, setRecords] = useState<Record[]>([]);
  const [tracks, setTracks] = useState<(Track | null)[]>([]);
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [datasets, setDatasets] = useState<any[]>([]);
  const [currentWeek, setCurrentWeek] = useState<number>(-0.1);
  const [toggleAnimationPlay, restart] = useAnimationFrame(setCurrentWeek, 0.0015);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [previewUrl, setPreviewUrl] = useState("");

  const togglePlay = () => {
    setIsAudioPlaying(!isAudioPlaying);
    toggleAnimationPlay();
  };

  useEffect(() => {
    if (artist) {
      getRecordsForArtist(artist.id).then(setRecords);
      console.log("records");
      console.log(records);
    }
  }, [artist]);

  useEffect(() => {
    const trackIds = records.map((record: Record) => record.trackId);
    Promise.all(trackIds.map((trackId) => getTrack(trackId))).then(setTracks);

    if (records.length > 0) {
      setDatasets(
        records.flatMap((record) => {
          return record.streaks.map((streak) => {
            const data = streak.positions.map((position, index) => ({ x: index + streak.offset, y: position }));
            return {
              label: `${record.trackId}-${streak.startDate}`,
              fill: "start",
              borderColor: "rgba(255,0,0,0)",
              backgroundColor: "rgba(255,0,0,0.2)",
              showLine: true,
              data,
            };
          });
        })
      );
    }
  }, [records]);

  useEffect(() => {
    const topTrackId = getTopTrackForWeek(Math.floor(currentWeek), records);
    setCurrentTrack(tracks.find((track: Track | null) => track && track.id === topTrackId) || null);
  }, [Math.floor(currentWeek)]);

  useEffect(() => {
    if (currentTrack) {
      setPreviewUrl(currentTrack.previewUrl || "");
    }
  }, [currentTrack]);

  return (
    <div>
      <AudioPlayer isPlaying={isAudioPlaying} url={previewUrl} />
      <button onClick={togglePlay}>Start</button>
      <button onClick={restart}>Restart</button>
      {records.length > 0 && records[0].streaks[0].startDate && (
        <ScatterChart datasets={datasets} currentWeek={currentWeek} startDate={records[0].streaks[0].startDate} />
      )}
    </div>
  );
};

export default ChartHistory;
