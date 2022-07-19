import Stack from "@mui/material/Stack";

import GroundTruth from "../../nonview/core/GroundTruth";

import CriterionView from "../../view/molecules/CriterionView";

export default function CriteriaView({
  version,
  onChangeCriterionWeight,
  criterionWeights,
  refHomePage,
}) {
  const criteria = GroundTruth.getCriteria(version);
  return (
    <Stack gap={1} ref={refHomePage}>
      {criteria.map(function (criterionID, iCriterion) {
        const key = "criterion-" + version + "-" + criterionID;
        return (
          <CriterionView
            key={key}
            iCriterion={iCriterion}
            criterionID={criterionID}
            criterionWeights={criterionWeights}
            onChangeCriterionWeight={onChangeCriterionWeight}
          />
        );
      })}
    </Stack>
  );
}
