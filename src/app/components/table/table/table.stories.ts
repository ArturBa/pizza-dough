import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { TableComponent } from './table.component';
import { RowComponent } from '../row/row.component';
import { HeaderComponent } from '../header/header.component';
import { TotalWeightRowComponent } from '../total-weight-row/total-weight-row.component';

export default {
  title: 'Components/Table',
  component: TableComponent,
  decorators: [
    moduleMetadata({
      declarations: [RowComponent, HeaderComponent, TotalWeightRowComponent],
    }),
  ],
} as Meta;

type Story = StoryObj<TableComponent>;
export const Template: Story = {
  args: {
    data: [
      {
        title: 'Flour',
        weight: 305.44,
        bakers: 100,
        recommended: 'High-Gluten Flour',
      },
      {
        title: 'Water',
        bakers: 61,
        weight: 186.319,
        recommended: 'Water',
      },
      {
        title: 'Yeast',
        bakers: 0.1918,
        weight: 0.605,
        recommended: 'Instant Dry Yeast',
      },
      {
        title: 'Salt',
        bakers: 2.5,
        weight: 7.636,
        recommended: 'Sea Salt',
      },
      {
        title: 'Oil',
        bakers: 0,
        weight: 0,
      },
      {
        title: 'Sugar',
        bakers: 0,
        weight: 0,
      },
      {
        title: 'Other',
        bakers: 0,
        weight: 0,
      },
    ],
  },
};
