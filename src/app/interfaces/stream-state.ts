export interface StreamState {
  playing: boolean;
  readableCurrentTime: string;
  readableDuration: string;
  duration: number | undefined; // 毫秒为单位
  currentTime: number | undefined; // 毫秒为单位
  canplay: boolean;
  error: boolean;
}
