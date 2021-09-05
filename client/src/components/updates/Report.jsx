import { StyledCard, StyledContainer, StyledTypography, StyledLine, StyledFolder, StyledGoals, StyledGoalSegment, Icon, Progress, Bar, Upper,Lower, Legend, Subcontainer, Item, Para, Arc, StyledExport } from "./Report.styled"

import { Doughnut } from 'react-chartjs-2';

const data = {
  datasets: [
    {
       
      data: [30, 190, 15, 10 ],
      backgroundColor: [
        'rgba(47, 128, 237, 1)',
        'rgba(0, 184, 124, 1)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(244, 67, 54, 1)',
        // 'rgba(235, 235, 235, 1)',
        // 'rgba(235, 235, 235, 1)',
      ],
      borderColor: [
        'rgba(47, 128, 237, 1)',
        'rgba(0, 184, 124, 1)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(244, 67, 54, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
      cutout: '85%',
      options: {
        layout: {
            width: '40'
        }
    },
      
    },
  ],
};

const options = {
    height: '100'
}



const Report = () => {
    

    return (
            <StyledContainer>
                <StyledTypography>
                    Report
                </StyledTypography>
                <StyledLine>

                </StyledLine>
                
                <StyledCard>
                    <StyledGoalSegment>
                    <StyledFolder>
                        FOLDER:
                    </StyledFolder>
                    <StyledGoals>
                        All Goals<Icon></Icon>
                    </StyledGoals>
                    <StyledExport>
                        Export Report
                    </StyledExport>
                    </StyledGoalSegment>


                    <Bar>
                        
                    {/* <Doughnut 
                        data={data} 
                        height={50} 
                        options={options}
                        
                    /> */}
                      <Upper>
                          <Lower>75%</Lower>
                      </Upper>
                    </Bar>
                    
                   <Legend>
                       <Subcontainer>
                        <Item background="#EBEBEB" /><Para>60 Goals</Para>
                       </Subcontainer>
                       <Subcontainer>
                        <Item background="#2F80ED" /> <Para>52 In Progress</Para>
                       </Subcontainer>
                       <Subcontainer>
                        <Item background="#F44336" /> <Para>10 Expired</Para>
                       </Subcontainer>
                       <Subcontainer>
                        <Item background="#00B87C" /> <Para>27 Completed</Para>
                       </Subcontainer>
                    
                   </Legend>
                   
                    
                    
                </StyledCard>
            </StyledContainer>
    )
}

export default Report