import "jest-dom/extend-expect";

declare global {
  namespace jest {
    interface Matchers<R, T> {
      toBeNull(): Matchers<R, T>;
      toBeSomeOf(...matchers: Matchers<T>[]): Matchers<R, T>;
      toBeArrayOf(matcher: Matchers<T>): Matchers<R, T>;
    }

    interface Expect {
      toBeNull(): Matchers<any>;
      toBeSomeOf<T>(...matchers: Matchers<T>[]): Matchers<any>;
      toBeArrayOf<T>(matcher: Matchers<T>): Matchers<any>;
    }
  }
}
