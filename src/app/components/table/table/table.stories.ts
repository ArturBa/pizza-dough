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
        weight: 500,
        recommended: 'All purpose',
      },
      {
        title: 'Water',
        weight: 500,
      },
      {
        title: 'Yeast',
        weight: 6.865,
      },
      {
        title: 'Salt',
        weight: 10.3,
      },
      {
        title: 'Oil',
        weight: 10.3,
      },
      {
        title: 'Sugar',
        weight: 10.3,
      },
      {
        title: 'Other',
      },
    ],
  },
};
