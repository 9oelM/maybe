export function maybe<
  Input,
  >(x: Input): {
    then: <
      ThenCallbackReturnType,
      >(thenCallback: (input: NonNullable<Input>) => ThenCallbackReturnType) => {
        otherwise: <OtherwiseFallback>(fallback: OtherwiseFallback) => ThenCallbackReturnType | OtherwiseFallback;
      };
    otherwise: <OtherwiseFallback>(fallback: OtherwiseFallback) => NonNullable<Input> | OtherwiseFallback;
  } {
  return {
    then: (thenCallback) => {
      return {
        otherwise: (fallback) => x != null ?
          thenCallback(x as NonNullable<Input>)
          : fallback,
      };
    },
    otherwise: (fallback) => x != null ? x as NonNullable<Input> : fallback,
  };
}
