import React from 'react'
import PropTypes from 'prop-types'
import Heading from '../../components/Heading'
import Preamble from '../../components/Preamble'
import TabsWrapper from '../../components/Tabs'
import Wrapper from '../../components/Wrapper'




const ComponentPagePreview = ({ entry, widgetFor }) => {
  const title = entry.getIn(['data', 'title']);
  const intro = entry.getIn(['data', 'intro']);
  const tabs = widgetFor( 'tabs');
  
  
  
  return (
    <div>
      <Heading tag={1} text={title} align={"left"} />
      <Preamble text={intro} tag="p" align={"left"} />
      <TabsWrapper tabs={tabs} />
    </div>
  );
  
}

ComponentPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),

}

export default ComponentPagePreview




