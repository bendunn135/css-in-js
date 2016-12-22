import React, {Component} from 'react';
import {StyleSheet, css} from 'aphrodite';
import Accordion from './Accordion/Accordion.js';
import AccordionPanel from './Accordion/AccordionPanel.js';

const styles = StyleSheet.create({
  container: {
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#ff0000',
    width: '320px',
    padding: '20px',
    borderRadius: '5px',
    border: 'none',
    outline: 'none',
    ':hover': {
      color: '#fff',
    },
    ':active': {
      position: 'relative',
      top: '2px'
    },
    '@media (max-width: 480px)': {
      width: '160px'
    }
  }
});

export default class Button extends Component {
  render() {
    return (
      <div className={css(styles.container)}>
        <button className={css(styles.button)}>Click me!</button>
        <Accordion>
          
            <AccordionPanel title="Accordion Panel Title Here">
              <p>
                Curabitur vitae mauris fringilla, sodales lacus placerat, volutpat enim. Fusce tristique nisi non metus lacinia commodo. Nullam ornare orci elit, non eleifend justo rutrum in. Curabitur consectetur gravida aliquet. Quisque et orci metus. Ut lacinia turpis ac arcu elementum, nec fringilla urna dictum. Phasellus porta elementum eros, in condimentum eros commodo a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultrices justo ac lacus molestie, quis volutpat nulla pellentesque. Fusce vel pharetra odio. Nullam id ultrices elit, ac sodales risus. Nunc gravida aliquet ornare. Aliquam tristique, turpis at varius sagittis, elit magna posuere metus, ac tincidunt velit metus nec felis. Nullam eget nunc est. Sed fringilla, velit quis maximus feugiat, massa nulla tempus dui, eget cursus orci nisi quis neque. Donec venenatis erat lorem, non ultricies dui vehicula sit amet.
              </p>
            </AccordionPanel>

            <AccordionPanel title="Accordion Panel Title Here 2">
              <p>
                Curabitur vitae mauris fringilla, sodales lacus placerat, volutpat enim. Fusce tristique nisi non metus lacinia commodo. Nullam ornare orci elit, non eleifend justo rutrum in. Curabitur consectetur gravida aliquet. Quisque et orci metus. Ut lacinia turpis ac arcu elementum, nec fringilla urna dictum. Phasellus porta elementum eros, in condimentum eros commodo a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultrices justo ac lacus molestie, quis volutpat nulla pellentesque. Fusce vel pharetra odio. Nullam id ultrices elit, ac sodales risus. Nunc gravida aliquet ornare. Aliquam tristique, turpis at varius sagittis, elit magna posuere metus, ac tincidunt velit metus nec felis. Nullam eget nunc est. Sed fringilla, velit quis maximus feugiat, massa nulla tempus dui, eget cursus orci nisi quis neque. Donec venenatis erat lorem, non ultricies dui vehicula sit amet.
              </p>
            </AccordionPanel>

            <AccordionPanel title="Accordion Panel Title Here 3">
              <p>
                Curabitur vitae mauris fringilla, sodales lacus placerat, volutpat enim. Fusce tristique nisi non metus lacinia commodo. Nullam ornare orci elit, non eleifend justo rutrum in. Curabitur consectetur gravida aliquet. Quisque et orci metus. Ut lacinia turpis ac arcu elementum, nec fringilla urna dictum. Phasellus porta elementum eros, in condimentum eros commodo a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultrices justo ac lacus molestie, quis volutpat nulla pellentesque. Fusce vel pharetra odio. Nullam id ultrices elit, ac sodales risus. Nunc gravida aliquet ornare. Aliquam tristique, turpis at varius sagittis, elit magna posuere metus, ac tincidunt velit metus nec felis. Nullam eget nunc est. Sed fringilla, velit quis maximus feugiat, massa nulla tempus dui, eget cursus orci nisi quis neque. Donec venenatis erat lorem, non ultricies dui vehicula sit amet.
              </p>
              <p>
                Curabitur vitae mauris fringilla, sodales lacus placerat, volutpat enim. Fusce tristique nisi non metus lacinia commodo. Nullam ornare orci elit, non eleifend justo rutrum in. Curabitur consectetur gravida aliquet. Quisque et orci metus. Ut lacinia turpis ac arcu elementum, nec fringilla urna dictum. Phasellus porta elementum eros, in condimentum eros commodo a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultrices justo ac lacus molestie, quis volutpat nulla pellentesque. Fusce vel pharetra odio. Nullam id ultrices elit, ac sodales risus. Nunc gravida aliquet ornare. Aliquam tristique, turpis at varius sagittis, elit magna posuere metus, ac tincidunt velit metus nec felis. Nullam eget nunc est. Sed fringilla, velit quis maximus feugiat, massa nulla tempus dui, eget cursus orci nisi quis neque. Donec venenatis erat lorem, non ultricies dui vehicula sit amet.
              </p>
              <p>
                Curabitur vitae mauris fringilla, sodales lacus placerat, volutpat enim. Fusce tristique nisi non metus lacinia commodo. Nullam ornare orci elit, non eleifend justo rutrum in. Curabitur consectetur gravida aliquet. Quisque et orci metus. Ut lacinia turpis ac arcu elementum, nec fringilla urna dictum. Phasellus porta elementum eros, in condimentum eros commodo a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultrices justo ac lacus molestie, quis volutpat nulla pellentesque. Fusce vel pharetra odio. Nullam id ultrices elit, ac sodales risus. Nunc gravida aliquet ornare. Aliquam tristique, turpis at varius sagittis, elit magna posuere metus, ac tincidunt velit metus nec felis. Nullam eget nunc est. Sed fringilla, velit quis maximus feugiat, massa nulla tempus dui, eget cursus orci nisi quis neque. Donec venenatis erat lorem, non ultricies dui vehicula sit amet.
              </p>
            </AccordionPanel>

            <AccordionPanel title="Accordion Panel Title Here 4">
              <p>
                Curabitur vitae mauris fringilla, sodales lacus placerat, volutpat enim. Fusce tristique nisi non metus lacinia commodo. Nullam ornare orci elit, non eleifend justo rutrum in. Curabitur consectetur gravida aliquet. Quisque et orci metus. Ut lacinia turpis ac arcu elementum, nec fringilla urna dictum. Phasellus porta elementum eros, in condimentum eros commodo a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultrices justo ac lacus molestie, quis volutpat nulla pellentesque. Fusce vel pharetra odio. Nullam id ultrices elit, ac sodales risus. Nunc gravida aliquet ornare. Aliquam tristique, turpis at varius sagittis, elit magna posuere metus, ac tincidunt velit metus nec felis. Nullam eget nunc est. Sed fringilla, velit quis maximus feugiat, massa nulla tempus dui, eget cursus orci nisi quis neque. Donec venenatis erat lorem, non ultricies dui vehicula sit amet.
              </p>
            </AccordionPanel>

          </Accordion>
      </div>
    );
  }
}
