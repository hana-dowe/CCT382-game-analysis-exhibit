export type Reference = { firstWord: string; citation: JSX.Element };

export type CardDetailMap = {
  emoji: string;
  heading: React.ReactNode;
  release: string;
  console: {
    platform: string;
    createdBy: React.ReactNode;
  };
  gameDetails: string;
  controllerDetails: string;
  mainLabel: React.ReactNode;
  references: Reference[];
  artifacts: { label: string; media: React.ReactNode }[];
};
