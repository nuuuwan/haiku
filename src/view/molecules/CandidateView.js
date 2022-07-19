import Card from '@mui/material/Card';
import Candidate from "../../nonview/core/Candidate"
import WeightView from "../../view/molecules/WeightView"
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import {t} from "../../nonview/base/I18N"
const AVATAR_SIZE = 64;
export default function CandidateView({candidateId, score, rank}) {
  const candidate = Candidate.fromId(candidateId);
  return (
    <Card sx={{m: 1, p: 1}}>
      <Stack direction="row" gap={2} sx={{width: "100%"}}>
      <Typography variant="h6" sx={{color: "lightgray"}}>
        {"#" + (rank + 1)}
      </Typography>
       <Avatar src={candidate.imgSrc}  sx={{ width: AVATAR_SIZE, height: AVATAR_SIZE }}/>
       <Box>
      <Typography variant="caption">
        {t(candidate.firstName)}
      </Typography>
      <Typography variant="subtitle1">
        {t(candidate.lastName)}
      </Typography>
      <Typography variant="caption" color="lightgray">
        {t(candidate.party)}
      </Typography>
      </Box>
      <Typography sx={{ flexGrow: 1 }}>
        {" "}
      </Typography>
      <WeightView weight={score} />
      </Stack>

    </Card>
  );
}
