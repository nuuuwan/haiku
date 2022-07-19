import { useState } from "react";
import Stack from '@mui/material/Stack';
import Card from "@mui/material/Card";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import { t } from "../../nonview/base/I18N";
import WeightView from "../../view/molecules/WeightView"
import Weight from "../../nonview/core/Weight"

export default function CriterionView({
  iCriterion,
  criterionID,
  onChangeCriterionWeight,
  criterionWeights,
}) {
  const [criterionWeight, setCriterionValue] = useState(
    criterionWeights[iCriterion]
  );

  const onChange = function (e) {
    setCriterionValue(parseInt(e.target.value));
  };

  const onChangeCommitted = function (e) {
    onChangeCriterionWeight(iCriterion, criterionWeight);
  };

  const color = Weight.getColor(criterionWeight);

  return (
    <Card sx={{ m: 1, p: 1 }}>
      <Stack direction="row" gap={1}>
      <Typography variant="caption" color="lightgray">
        {iCriterion + 1}.
      </Typography>
        <Box>
        <Typography variant="body2">
          {t(criterionID)}
        </Typography>
        <Box sx={{m:1,marginBottom: 0}}>
        <Slider
          value={criterionWeight}
          min={-101}
          max={100}
          onChange={onChange}
          onChangeCommitted={onChangeCommitted}
          color="neutral"
          sx={{width: window.innerWidth * 0.5, color}}
        />
        </Box>
        </Box>
        <Typography sx={{ flexGrow: 1 }}>
          {" "}
        </Typography>
        <WeightView weight={criterionWeight} />
      </Stack>
    </Card>
  );
}
