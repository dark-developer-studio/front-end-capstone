import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function RecommendRadios(props) {
  const handleRecommend = (event) => {
    if (event.target.value === 'Yes') {
      props.setRecommend(true);
    } else if (event.target.value === 'No') {
      props.setRecommend(false);
    }
  };
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend" />
      <RadioGroup defaultValue="none" aria-label="recommend" name="customized-radios">
        <FormControlLabel
          value="Yes"
          onChange={handleRecommend}
          control={<Radio />}
          label="Yes"
        />
        <FormControlLabel value="No" onChange={handleRecommend} control={<Radio />} label="No" />
      </RadioGroup>
    </FormControl>
  );
}
