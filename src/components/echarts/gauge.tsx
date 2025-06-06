import Chart from '@/components/echarts/chart';
import useChartConfig from '@/components/echarts/config';
import EmptyData from '@/components/empty-data';
import React, { memo } from 'react';
import { ChartProps } from './types';

const GaugeChart: React.FC<Omit<ChartProps, 'seriesData' | 'xAxisData'>> = (
  props
) => {
  const {
    gaugeItemConfig,
    title: titleConfig,
    chartColorMap
  } = useChartConfig();
  const { value, height, width, labelFormatter, title, color } = props;
  if (!value && value !== 0) {
    return <EmptyData height={height} title={title}></EmptyData>;
  }

  const setDataOptions = () => {
    return {
      title: {
        ...titleConfig,
        text: title,
        top: '0',
        left: 'center'
      },
      series: [
        {
          ...gaugeItemConfig,
          axisLine: {
            ...gaugeItemConfig.axisLine,
            lineStyle: {
              ...gaugeItemConfig.axisLine.lineStyle,
              color: [
                [value / 100, color],
                [1, chartColorMap.gaugeBgColor]
              ]
            }
          },
          itemStyle: {
            color: 'transparent'
          },
          detail: {
            ...gaugeItemConfig.detail,
            formatter: labelFormatter || gaugeItemConfig.detail.formatter
          },
          data: [{ value }]
        }
      ]
    };
  };

  const dataOptions: any = setDataOptions();

  return (
    <Chart
      height={height}
      options={dataOptions}
      width={width || '100%'}
    ></Chart>
  );
};

export default memo(GaugeChart);
