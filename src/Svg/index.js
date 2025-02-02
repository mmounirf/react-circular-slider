import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import PropTypes from "prop-types";

const Svg = ({
         width,
         label,
         direction,
         strokeDasharray,
         strokeDashoffset,
         progressColorFrom,
         progressColorTo,
         trackColor,
         progressSize,
         trackSize,
         svgFullPath,
         radiansOffset,
         progressLineCap,
     }) => {

    const styles = StyleSheet.create({
        svg: {
            position: 'relative',
            zIndex: 2
        },

        path: {
            transform: `rotate(${radiansOffset}rad) ${direction === -1 && 'scale(-1, 1)'}`,
            transformOrigin: 'center center'
        }
    });

    return (
        <svg
            width={`${width}px`}
            height={`${width}px`}
            viewBox={`0 0 ${width} ${width}`}
            overflow="visible"
            className={css(styles.svg)}
        >
            <defs>
                <linearGradient id={label} x1="100%" x2="0%">
                    <stop offset="0%" stopColor={progressColorFrom}/>
                    <stop offset="100%" stopColor={progressColorTo}/>
                </linearGradient>
            </defs>
            <circle
                strokeWidth={trackSize}
                fill="none"
                stroke={trackColor}
                cx={width / 2}
                cy={width / 2}
                r={width / 2}
            />
            <path
                className={css(styles.path)}
                ref={svgFullPath}
                strokeDasharray={strokeDasharray}
                strokeDashoffset={strokeDashoffset}
                strokeWidth={progressSize}
                strokeLinecap={progressLineCap !== 'round' ? 'butt' : 'round'}
                fill="none"
                stroke={`url(#${label})`}
                d={`
                        M ${width / 2}, ${width / 2}
                        m 0, -${width / 2}
                        a ${width / 2},${width / 2} 0 0,1 0,${width}
                        a -${width / 2},-${width / 2} 0 0,1 0,-${width}
                    `}/>
        </svg>
    );
};

Svg.propTypes = {
    width: PropTypes.number,
    label: PropTypes.string,
    direction: PropTypes.number,
    svgFullPath: PropTypes.object,
    strokeDasharray: PropTypes.number,
    strokeDashoffset: PropTypes.number,
    progressColorFrom: PropTypes.string,
    progressColorTo: PropTypes.string,
    progressLineCap: PropTypes.string,
    progressSize: PropTypes.number,
    trackColor: PropTypes.string,
    trackSize: PropTypes.number,
    radiansOffset: PropTypes.number,
};

export default Svg;
