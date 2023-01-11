import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Modal from './modal';
import { useRef } from 'react';
import { atom, useAtom } from 'jotai';

const UrlForm = () => {
  const urlRef = useRef(null);
  return (
    <>
      <div>情報を取得したいNotionのデータベースページのURLを入力して下さい。</div>
      <TextField
        required
        id="urlField"
        label="NotionのURL"
        sx={{ mt: "20px" }}
        autoFocus
        ref={urlRef}
      />
    </>
  )
}

const ChannelForm = () => {
  const channelRef = useRef(null);
  return (
    <>
      <div>通知先のチャンネルを選択して下さい</div>
      <TextField
        required
        id="usrField"
        label="通知チャンネル"
        sx={{ mt: "20px" }}
        autoFocus
        ref={channelRef}
      />
    </>
  )
}

const FilterForm = () => {
  const filterRef = useRef(null);
  return (
    <>
      <div>フィルター設定を適用させる場合はフィルターを選択して下さい</div>
      <TextField
        required
        id="usrField"
        label="通知チャンネル"
        sx={{ mt: "20px" }}
        autoFocus
        ref={filterRef}
      />
    </>
  )
}

const MessageForm = () => {
  const usrRef = useRef(null);
  const iconRef = useRef(null);
  const msgRef = useRef(null);
  return (
    <>
      <div>Slackに通知する際のメッセージを入力して下さい</div>
      <TextField
        required
        id="usrField"
        label="通知ユーザー名"
        sx={{ mt: "20px" }}
        autoFocus
        ref={usrRef}
      />
      <TextField
        id="iconField"
        label="アイコン"
        sx={{ mt: "20px" }}
        autoFocus
        ref={iconRef}
      />
      <TextField
        required
        id="msgField"
        label="メッセージ"
        sx={{ mt: "20px" }}
        placeholder="スラックに通知するメッセージ"
        multiline
        rows={10}
        ref={msgRef}
      />
    </>
  )
}




const steps = [
  {
    label: 'データベースの選択',
    description: <UrlForm />,
  },
  {
    label: 'メッセージの作成',
    description: <MessageForm />,
  },
  {
    label: 'データベースのフィルター',
    description: <FilterForm />,
  },
  {
    label: '通知チャンネルの設定',
    description: <ChannelForm />,
  },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 400, margin: "auto" }}>
      <Stepper activeStep={activeStep} orientation="vertical">

        <Step key={urlform}>
          <StepLabel
            optional={
              <Typography variant="caption">Last step</Typography>
            }
          >
            データベースの選択
          </StepLabel>
          <StepContent>
            <Typography>
              <div>情報を取得したいNotionのデータベースページのURLを入力して下さい。</div>
              <TextField
                required
                id="urlField"
                label="NotionのURL"
                sx={{ mt: "20px" }}
                autoFocus
                ref={urlRef}
              />
            </Typography>
            <Box sx={{ mb: 2 }}>
              <div>
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 1, mr: 1 }}
                >
                  {index === steps.length - 1 ? '確認する' : '確定'}
                </Button>
                <Button
                  disabled={index === 0}
                  onClick={handleBack}
                  sx={{ mt: 1, mr: 1 }}
                >
                  戻る
                </Button>
              </div>
            </Box>
          </StepContent>
        </Step>

      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}
