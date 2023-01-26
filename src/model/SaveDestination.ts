import { NewDestination } from './NewDestination'
export interface SaveDestination {
    saveDestination: (params: NewDestination) => NewDestination;
  }
  