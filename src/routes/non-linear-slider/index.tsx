import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useMemo, useRef, useState } from 'react';
import {
  Label,
  Slider,
  SliderOutput,
  SliderThumb,
  SliderTrack,
} from 'react-aria-components';

export const Route = createFileRoute('/non-linear-slider/')({
  component: NonLinearSlider,
});

function NonLinearSlider() {
  const sliderRef = useRef<HTMLInputElement>(null);

  const steps = [10, 50, 100, 250, 500, 1000];
  const [value, setValue] = useState(0);

  const formattedDistance = useMemo(() => `${steps[value]}km`, [value]);

  useEffect(() => {
    if (!sliderRef.current) return;

    sliderRef.current.setAttribute('aria-valuetext', formattedDistance);
  }, [formattedDistance]);

  return (
    <div>
      <Slider maxValue={steps.length - 1} value={value} onChange={setValue}>
        <Label>Distance</Label>
        <SliderOutput>{formattedDistance}</SliderOutput>
        <SliderTrack>
          <SliderThumb inputRef={sliderRef} />
        </SliderTrack>
      </Slider>
    </div>
  );
}
