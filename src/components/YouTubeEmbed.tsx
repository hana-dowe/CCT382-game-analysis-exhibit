type Props = {
  videoUID: string;
};

function YouTubeEmbed(props: Props) {
  const { videoUID } = props;

  return (
    <iframe
      id="iframe"
      width="100%"
      height="100%"
      src={`https://www.youtube.com/embed/${videoUID}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  );
}

export default YouTubeEmbed;
