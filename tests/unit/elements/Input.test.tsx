import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import Input from "src/modules/common/components/Input";

describe("Input", () => {
  const textInput = "This is some text";
  const onChangeHandler = jest.fn();

  beforeEach(() => {
    render(<Input handleChange={onChangeHandler} placeholder="" />);
    const searchArtistInput = screen.getByRole("textbox");

    userEvent.type(searchArtistInput, textInput);
  });

  it("should invoke the handler when I type in the input", async () => {
    await waitFor(() => {
      expect(onChangeHandler).toHaveBeenLastCalledWith(textInput);
    });
  });

  it("should only invoke the handler ONCE when I type without pausing", async () => {
    await waitFor(() => {
      expect(onChangeHandler).toHaveBeenCalledWith(textInput);
    });
    expect(onChangeHandler).toHaveBeenCalledTimes(1);
  });
});
