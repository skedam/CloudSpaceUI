import * as React from "react";
import TextFilter from "@cloudscape-design/components/text-filter";
import Select from "@cloudscape-design/components/select";
import Box from "@cloudscape-design/components/box";

const SearchWithFilter: React.FC = () => {
  const [filteringText, setFilteringText] = React.useState("");
  const [selectedOption, setSelectedOption] = React.useState({ label: "Option 1", value: "1" });

  return (
    <Box
      style={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        maxWidth: "600px", // Restrict maximum width for the input field
        position: "relative", // Enable relative positioning for inner elements
      }}
    >
      {/* Unified TextFilter with Select inside */}
      <Select
      selectedOption={selectedOption}
      onChange={({ detail }) =>
        setSelectedOption(detail.selectedOption)
      }
      options={[
        {
          label: "Option 1",
          value: "1",
          iconName: "settings",
          description: "This is a description"
        },
        {
          label: "Option 2",
          value: "2",
          iconName: "unlocked",
          description: "This is a description"
        },
        {
          label: "Option 3",
          value: "3",
          iconName: "share",
          description: "This is a description"
        }
      ]}
      filteringType="auto"
    />
  
    </Box>
  );
};

export default SearchWithFilter;
