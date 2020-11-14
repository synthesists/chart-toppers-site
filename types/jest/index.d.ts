import "jest-dom/extend-expect";

declare global {
  namespace jest {
    interface Matchers<R, T> {
      toBeNull(): Matchers<R, T>;
      toBeSomeOf(...matcher: Matchers<T>[]): Matchers<R, T>;
    }

    interface Expect {
      toBeNull(): Matchers<any>;
      toBeSomeOf<T>(...matchers: Matchers<T>[]): Matchers<any>;
    }
  }
}
