import React from "react";
import CircularSlider from "@fseehawer/react-circular-slider";

const MultipleRange = () => {
    
  return (
    <CircularSlider
      label="savings"
      labelColor="#6A26A3"
      knobColor="#6F4BB5"
      progressColorFrom="#6A26A3"
      progressColorTo="#6A26A3"
      progressSize={24}
      trackColor="#eeeeee"
      trackSize={24}
      data={[
        "0 м²",
        "1 м²",
        "2 м²",
        "3 м²",
        "4 м²",
        "5 м²",
        "6 м²",
        "7 м²",
        "8 м²",
        "9 м²",
        "10 м²",
        "11 м²",
        "12 м²",
        "13 м²",
        "14 м²",
        "15 м²",
        "16 м²",
        "17 м²",
        "18 м²",
        "19 м²",
        "20 м²",  
        "21 м²",
        "22 м²",
        "23 м²",
        "24 м²",
        "25 м²",
        "26 м²",
        "27 м²",
        "28 м²",
        "29 м²",
        "30 м²",
        "31 м²",  
        "32 м²",
        "33 м²",
        "34 м²",
        "35 м²",
        "36 м²",
        "37 м²",
        "38 м²",
        "39 м²",
        "40 м²",
        "41 м²",
        "42 м²",  
        "43 м²",
        "44 м²",
        "45 м²",
        "46 м²",
        "48 м²",
        "49 м²",  
        "50 м²",    
      ]}
      dataIndex={10}
      onChange={(value: any) => {
        console.log(value);
      }}
    />
  );
};

export default MultipleRange;
