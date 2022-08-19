import PropTypes from 'prop-types';
import { isEmpty } from "lodash";

const Row = (props) => {
   const { align, justify, direction, classes, style, children } = props;
   return (
      <div
         className={`row${align ? ` align-items-${align}` : ""}${justify ? ` justify-content-${justify}` : ""}${direction ? ` flex-${direction}` : ""} ${!isEmpty(classes) ? classes.join(" ") : ""}`
         }
         style={style}
      >
         {children}
      </div>
   );
}

const Col = (props) => {
   const { style, classes, sm, md, lg, xl, children } = props;
   return (
      <div
         className={`col-sm-${sm ? sm : "12"} col-md-${md ? md : "12"} col-lg-${lg ? lg : "12"} col-xl-${xl ? xl : "12"} ${!isEmpty(classes) ? classes.join(" ") : ""}`}
         style={style}
      >
         {children}
      </div>
   );
}

Row.propTypes = {
   align: PropTypes.oneOf(['start', 'end', 'center', 'baseline', 'stretch']),
   classes: PropTypes.array,
   direction: PropTypes.oneOf(['column', 'column-reverse', 'row', 'row-reverse']),
   justify: PropTypes.oneOf(['start', 'end', 'center', 'between', 'around']),
   style: PropTypes.object
}

Col.propTypes = {
   classes: PropTypes.array,
   style: PropTypes.object,
   sm: PropTypes.number,
   md: PropTypes.number,
   lg: PropTypes.number,
   xl: PropTypes.number
}

export { Row, Col };

