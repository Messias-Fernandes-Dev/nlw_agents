export type GetRoomQuestionsResponse = Array<{
  id: string;
  quastion: string;
  answer: string | null;
  createdAt: string;
}>;