import React from 'react';

const Blog = ({ color }) => (
    <svg
        role="img"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-blog"
    >
        <title>{'Blog'}</title>
        <g>
            <g id="E">
                <text
                    transform="translate(-11 18)"
                    fontSize={13}
                    fontFamily="-apple-system, BlinkMacSystemFont, SegoeUI-Semibold, Segoe UI"
                    fontWeight={100}
                    fill={color}
                >
                    <tspan x={20} y={0}>
                        {'E'}
                    </tspan>
                </text>
            </g>
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
        </g>
    </svg>
);

export default Blog;
