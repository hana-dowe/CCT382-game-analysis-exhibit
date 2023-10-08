type Props = {
  label: string;
  source: string;
};

function Image(props: Props) {
  const { label, source } = props;
  // eslint-disable-next-line @next/next/no-img-element
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      style={{
        maxWidth: '100%',
        maxHeight: '100%',
        width: 'auto',
        height: 'auto',
      }}
      src={source}
      alt={label}
      draggable={false}
    />
  );
}

export default Image;
