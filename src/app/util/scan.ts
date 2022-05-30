export interface Scan {
  algorithm_version: number;
  end_time?: string;
  grade?: string;
  hidden: boolean;
  response_headers: {};
  scan_id: number;
  score?: number;
  likelihood_indicator?: 'UNKNOWN' | 'LOW' | 'MEDIUM' | 'HIGH' | 'MAXIMUM';
  start_time?: string;
  state: 'ABORTED' | 'FAILED' | 'FINISHED' | 'PENDING' | 'STARTING' | 'RUNNING';
  tests_failed?: number;
  tests_passed?: number;
  tests_quantity?: number;
}
