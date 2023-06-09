'use client';
import { useEffect } from 'react';

export default function UpdateTitle(props) {
  useEffect(() => {
    if (props.title) {
      document.title = props.title;
    }
  }, [props.title]);

  return <h1>Thank you for your order</h1>;
}
