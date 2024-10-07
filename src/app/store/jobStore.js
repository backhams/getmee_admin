// store/jobStore.js
import { create } from 'zustand';

const useJobStore = create((set) => ({
  job: null,
  setJob: (jobData) => set({ job: jobData }),
}));

export default useJobStore;
