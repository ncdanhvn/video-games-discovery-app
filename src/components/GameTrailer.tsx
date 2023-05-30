import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

const TrailerPlayer = ({ gameId }: Props) => {
  const { data, isLoading, error } = useTrailers(gameId);

  if (isLoading) return null;

  if (error) throw error;

  const first = data?.results[0];

  return first ? (
    <video src={first.data[480]} poster={first.preview} controls />
  ) : null;
};

export default TrailerPlayer;
