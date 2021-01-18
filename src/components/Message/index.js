import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
//import differenceInCalendarISOYears from 'date-fns/difference_in_calendar_iso_years'
//mport differenceInCalendarISOWeekYears from 'date-fns/differenceInCalendarISOWeekYears'
import parseISO from 'date-fns/parseISO';
import formatDistanceToNow  from 'date-fns/formatDistanceToNow'

import './Message.scss'

const Message = ({avatar,text,data}) => (
    <div className="message">
        <div className="message__avatar">
            <img src={avatar} alt="name"/>
        </div>
        <div className="message__info">
            <div className="message__bubble">   
                <p className="message__text">{text}</p>
            </div>
            <span className="message__data">{formatDistanceToNow(parseISO('Mon Jan 18 2021 19:23:21'))}</span>
        </div>
    </div>

)

Message.propTypes = {
    className: PropTypes.string

}

export default Message;
