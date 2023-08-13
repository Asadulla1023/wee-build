import React from "react";
import CircularSlider from "@fseehawer/react-circular-slider";  

const MultipleRange = () => {

  const arrayOfNumbers: string[] = []

    for (let i = 0; i <= 300; i++) {
        arrayOfNumbers.push(i + "м²")
    }
    
  return (
    <CircularSlider
      label="WEE BUILD"
      labelColor="#6A26A3"
      knobColor="#6F4BB5"
      progressColorFrom="#6A26A3"
      progressColorTo="#6A26A3"
      progressSize={24}
      trackColor="#eeeeee"
      trackSize={24}
      data={arrayOfNumbers}
      dataIndex={169}     
    />
  );
};

export default MultipleRange;
