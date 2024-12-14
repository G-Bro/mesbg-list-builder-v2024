import { DialogContent } from "@mui/material";
import { useAppState } from "../../../state/app";

export const RosterSummaryScreenshotModal = () => {
  const { modalContext } = useAppState();
  return (
    <>
      <DialogContent>
        {modalContext.screenshot != null && (
          <img
            src={modalContext.screenshot}
            alt="roster screenshot"
            style={{
              margin: "1rem 0",
              border: "1px solid black",
              boxShadow: "1px 1px 5px 0px #000000AA",
            }}
          />
        )}
      </DialogContent>
    </>
  );
};
