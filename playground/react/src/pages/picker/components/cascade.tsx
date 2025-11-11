import { Picker } from '@component-hook/picker/react';
import { useState } from 'react';

const columns = [
  {
    label: 'Electronics',
    value: 'electronics',
    children: [
      {
        label: 'Mobile',
        value: 'mobile',
        children: [
          { label: 'Smartphone', value: 'smartphone' },
          { label: 'Feature Phone', value: 'feature-phone' },
        ],
      },
      {
        label: 'Computer',
        value: 'computer',
        children: [
          { label: 'Laptop', value: 'laptop' },
          { label: 'Desktop', value: 'desktop' },
        ],
      },
    ],
  },
  {
    label: 'Home Appliances',
    value: 'home-appliances',
    children: [
      {
        label: 'Kitchen Appliances',
        value: 'kitchen-appliances',
        children: [
          { label: 'Microwave', value: 'microwave' },
          { label: 'Refrigerator', value: 'refrigerator' },
        ],
      },
      {
        label: 'Cleaning Appliances',
        value: 'cleaning-appliances',
        children: [
          { label: 'Vacuum Cleaner', value: 'vacuum-cleaner' },
          { label: 'Robot Vacuum', value: 'robot-vacuum' },
        ],
      },
    ],
  },
  {
    label: 'Clothing',
    value: 'clothing',
    children: [
      {
        label: 'Mens Clothing',
        value: 'mens-clothing',
        children: [
          { label: 'Shirt', value: 'shirt' },
          { label: 'Trousers', value: 'trousers' },
        ],
      },
      {
        label: 'Womens Clothing',
        value: 'womens-clothing',
        children: [
          { label: 'Dress', value: 'dress' },
          { label: 'Skirt', value: 'skirt' },
        ],
      },
    ],
  },
];

export function CascadePicker() {
  const [pickerValues, setPickerValues] = useState<string[]>([]);

  return (
    <>
      <div style={{ maxWidth: '500px' }}>
        <Picker
          columns={columns}
          values={pickerValues}
          onChange={setPickerValues}
        />
      </div>

      <p>Selected value: {pickerValues.join(' / ') || 'not selected yet'}</p>
    </>
  );
}
