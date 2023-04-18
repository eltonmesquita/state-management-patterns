export const boxStyles = ({
  size = "4rem",
  colour,
}: {
  size?: string | number;
  colour: string;
}) => ({
  display: "block",
  width: size,
  height: size,
  backgroundColor: colour,
  marginBottom: "1rem",
});

export const container = {
  margin: "0 auto",
  padding: "2rem",
  width: "100%",
  maxWidth: "1200px",
};

export const formStyles = {
  margin: "2rem 0",
}