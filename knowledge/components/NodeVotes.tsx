import Box from "@mui/material/Box";
import { FC } from "react";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";

type Props = {
  corrects?: number;
  wrongs?: number;
};

const NodeVotes: FC<Props> = ({ corrects = 0, wrongs = 0 }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <Tooltip title={`${wrongs} downvotes`}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            mr: 2,
          }}
        >
          <CloseIcon fontSize="small" color="error" />
          <Typography
            sx={{ ml: 1, color:theme=>theme.palette.error.main}}
          >
            {wrongs}
          </Typography>
        </Box>
      </Tooltip>
      <Tooltip title={`${corrects} upvotes`}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            mr: 2,
          }}
        >
          <CheckIcon fontSize="small" color="success"/>
          <Typography 
            sx={{ ml: 1, color:theme=>theme.palette.success.main}}
          >
            {corrects}
          </Typography>
        </Box>
      </Tooltip>
    </Box>
  );
};

export default NodeVotes;
