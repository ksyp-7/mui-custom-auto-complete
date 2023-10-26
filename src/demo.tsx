import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Tooltip from "@mui/material/Tooltip";
import Chip from "@mui/material/Chip";
import ClearIcon from "@mui/icons-material/Clear";
import { styled } from "@mui/material/styles";
import { fiftyProducts as products } from "./data";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const StyledChip = styled(Chip)({
  "&.MuiChip-root": {
    backgroundColor: "#E9F1FF",
    borderRadius: "16px"
  },
  ".MuiChip-deleteIcon": {
    color: "#0363C4"
  }
});

export default function CheckboxesTags() {
  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={products}
      disableCloseOnSelect
      getOptionLabel={(option) => option.name}
      ChipProps={{ color: "warning" }}
      renderOption={(props, option, { selected }) => (
        <li {...props} key={option.id}>
          {option.sku}
        </li>
      )}
      limitTags={5}
      renderInput={(params) => (
        <TextField
          {...params}
          fullWidth
          label="Targeted SKUs"
          helperText="All the products that will be part of this campaign."
        />
      )}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Tooltip title={`${option.sku}`} key={option.id}>
            <StyledChip
              {...getTagProps({ index })}
              variant="filled"
              label={`${option.sku}`}
              deleteIcon={<ClearIcon />}
            />
          </Tooltip>
        ))
      }
    />
  );
}
