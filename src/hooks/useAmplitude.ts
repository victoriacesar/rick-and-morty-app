import * as amplitude from '@amplitude/analytics-browser';

const useAmplitude = () => {
  const init = () => {
    amplitude.init(import.meta.env.VITE_AMPLITUDE_KEY);
  };

  return {
    init,
  };
};

export default useAmplitude;
