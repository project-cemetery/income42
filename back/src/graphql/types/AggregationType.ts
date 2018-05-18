import { GraphQLEnumType } from 'graphql'

import AggregationEnum from '../../service/model/AggregationEnum'

export { AggregationEnum }

export default new GraphQLEnumType({
    name: 'Aggregation',
    values: {
      WEEK:  { value: AggregationEnum.week  },
      MONTH: { value: AggregationEnum.month },
      YEAR:  { value: AggregationEnum.year  },
    },
})
