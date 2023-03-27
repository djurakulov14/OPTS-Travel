import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
  <MuiAccordion className=' !max-lg:w-full' disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  // border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem', color:"#00AFD7" }} />}
    {...props}
  />
))(({ theme }) => ({
  borderRadius: "10px",
  border: "1px solid #00AFD7",
  flexDirection: 'row-reverse',
  marginBottom: "5px",
  marginTop: "5px",
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: "10px",
  border: "1px solid #00AFD7",

}));

export default function Accordionn({data}) {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };


  function removeLast (arr) {
    let data = arr.split('.')
    data.length--
    return data
  } 
  return (
    <div className='w-[100%] max-md:w-full'>
      {
        data.days.map((item, index) => 
      <Accordion key={index} expanded={expanded === `panel${index + 1}`} onChange={handleChange(`panel${index + 1}`)}>
        <AccordionSummary aria-controls={`panel${index + 1}d-content`} id={`panel${index + 1}d-header`}>
          <Typography>{index + 1 + " День"}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul className='list-disc pl-3'>
            {
              removeLast(item).map((item2, index2) => 
              <li key={index2}>{item2}</li>  
            )
            }
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>

        ) 
      }
      {/* <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Collapsible Group Item #2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Collapsible Group Item #3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion> */}
    </div>
  );
}