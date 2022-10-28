import { Box, useMediaQuery, Divider } from '@mui/material';
import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import Typography from '@mui/material/Typography';
import Heading from './Heading';
import ArticleIcon from '@mui/icons-material/Article';
import GroupIcon from '@mui/icons-material/Group';
import EventIcon from '@mui/icons-material/Event';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import CelebrationIcon from '@mui/icons-material/Celebration';

export default function OppositeContentTimeline() {
  const match = useMediaQuery('(min-width:600px)');
  return (
    <Box
      sx={{
        // backgroundColor: "#ECEDE9",
        width: '100%',
        height: 'auto',
      }}
    >
      <Box
        sx={
          match
            ? {
                padding: '2rem',
              }
            : {
                paddingTop: '2rem',
                paddingBottom: '2rem',
              }
        }
      >
        <Heading text="TIMELINE" size={match}></Heading>
        <Timeline
          position="alternate"
          sx={{ marginY: '2rem', padding: '0rem' }}
        >
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align="right"
              variant="body1"
              color="text.secondary"
            >
              30 October 2022
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot>
                <HowToRegIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '18px', px: 2 }}>
              <Typography variant="h5" component="span">
                Coding phase begins
              </Typography>
              {/* <Typography>Register now</Typography> */}
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              variant="body1"
              color="text.secondary"
            >
              10 November 2022
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <EventIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h5" component="span">
                Mid evaluation
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align="right"
              variant="body1"
              color="text.secondary"
            >
              20 November 2022
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot>
                <ArticleIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '18px', px: 2 }}>
              <Typography variant="h5" component="span">
                Final evaluation
              </Typography>
            </TimelineContent>
          </TimelineItem>
          {/* <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              variant="body1"
              color="text.secondary"
            >
              Till 20 October 2022
              <Typography>11:59 PM</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <LaptopMacIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '18px', px: 2 }}>
              <Typography variant="h5" component="span">
                Prototype Submission
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align="right"
              variant="body1"
              color="text.secondary"
            >
              21 October 2022
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot>
                <GroupIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '18px', px: 2 }}>
              <Typography variant="h5" component="span">
                Offline Interview
              </Typography>
            </TimelineContent>
          </TimelineItem> */}
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <CelebrationIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h5" component="span">
                Results
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Box>
    </Box>
  );
}
