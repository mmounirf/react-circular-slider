import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import PropTypes from "prop-types";

const Labels = ({
        labelColor,
        labelFontSize,
        valueFontSize,
        appendToValue,
        verticalOffset,
        labelHide,
        label,
        value
    }) => {
    const styles = StyleSheet.create({
        labels: {
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: `${labelColor}`,
            userSelect: 'none',
            zIndex: 1,
        },

        value: {
            fontSize: `${valueFontSize}`,
            marginBottom: `calc(${verticalOffset})`,
            position: 'relative'
        },

        appended: {
            position: 'absolute',
            right: '0',
            top: 0,
            transform: 'translate(100%, 0)'
        },

        hide: {
            display: 'none'
        }
    });

    return (
        <div className={css(styles.labels, labelHide && styles.hide)}>
            <div style={{fontSize: labelFontSize}}>{label}</div>
            <div className={css(styles.value)}>
                <code>{value}<span className={css(styles.appended)}>{appendToValue}</span></code>
            </div>
        </div>
    );
};

Labels.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    labelColor: PropTypes.string,
    labelFontSize: PropTypes.string,
    valueFontSize: PropTypes.string,
    appendToValue: PropTypes.string,
    verticalOffset: PropTypes.string,
    hideLabelValue: PropTypes.bool,
};

export default Labels;
