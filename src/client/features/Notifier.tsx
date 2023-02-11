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
import BasicModal from '../components/elements/modal';
import { useRef } from 'react';
import { serverFunctions } from '../utils/functions';

export default function Notifier() {
  const [activeStep, setActiveStep] = React.useState(0);
  const urlRef = useRef<HTMLInputElement>(null);
  const channelRef = useRef(null);
  const usrRef = useRef(null);
  const iconRef = useRef(null);
  const msgRef = useRef(null);
  const filterRef = useRef(null);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const parseURL = (url: string) => {
    const regex = /^https:\/\/www.notion.so\/mw-dm\/[\d|a-zA-Z]+?\?v=[\d|a-zA-Z]+?$/;
    const matches = url.match(regex);
    return matches ? matches[0] : null;
  }

  const handleDatabase = async () => {
    if (urlRef.current != null) {
      if (urlRef.current.value != null) {
        const db_id = parseURL(urlRef.current.value);
        if (db_id) {
          const notion_data = await serverFunctions.notion(db_id);
          console.log(notion_data);
          console.log(notion_data.getDataBase());
          handleNext();
        } else {
          urlRef.current.setAttribute("error", "true");
          urlRef.current.setAttribute("helperText", "正しいURLを入力してください");
        }
      } else {
        urlRef.current.setAttribute("error", "true");
        urlRef.current.setAttribute("helperText", "URLを入力してください");
      }
    }
  }

  return (
    <Box sx={{ maxWidth: 400, margin: "auto" }}>
      <Stepper activeStep={activeStep} orientation="vertical">

        <Step key="url">
          <StepLabel
          >
            データベースの選択
          </StepLabel>
          <StepContent>
            <Typography>
              情報を取得したいNotionのデータベースページのURLを入力して下さい。
            </Typography>
            <TextField
              required
              id="urlField"
              label="NotionのURL"
              sx={{ mt: "20px" }}
              autoFocus
              inputRef={urlRef}
            />
            <Box sx={{ mb: 2 }}>
              <Button
                variant="contained"
                onClick={handleDatabase}
                sx={{ mt: 1, mr: 1 }}
              >
                確定
              </Button>
            </Box>
          </StepContent>
        </Step>

        <Step key="channel">
          <StepLabel
          >
            通知先のチャンネルの選択
          </StepLabel>
          <StepContent>
            <Typography>
              通知先のチャンネルを選択して下さい
            </Typography>
            <TextField
              required
              id="usrField"
              label="通知チャンネル"
              sx={{ mt: "20px" }}
              autoFocus
              ref={channelRef}
            />
            <Box sx={{ mb: 2 }}>
              <Button
                variant="contained"
                onClick={handleNext}
                sx={{ mt: 1, mr: 1 }}
              >
                確定
              </Button>
              <Button
                onClick={handleBack}
                sx={{ mt: 1, mr: 1 }}
              >
                戻る
              </Button>
            </Box>
          </StepContent>
        </Step>

        <Step key="message">
          <StepLabel
          >
            メッセージの作成
          </StepLabel>
          <StepContent>
            <Typography>
              Slackに通知する際のメッセージを入力して下さい
            </Typography>
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
            <Box sx={{ mb: 2 }}>

              <Button
                variant="contained"
                onClick={handleNext}
                sx={{ mt: 1, mr: 1 }}
              >
                確定
              </Button>
              <Button
                onClick={handleBack}
                sx={{ mt: 1, mr: 1 }}
              >
                戻る
              </Button>

            </Box>
          </StepContent>
        </Step>

        <Step key="filter">
          <StepLabel
            optional={
              <Typography variant="caption">Last step</Typography>
            }
          >
            データベースのフィルター
          </StepLabel>
          <StepContent>
            <Typography>
              フィルター設定を適用させる場合はフィルターを選択して下さい
            </Typography>
            <TextField
              required
              id="usrField"
              label="通知チャンネル"
              sx={{ mt: "20px" }}
              autoFocus
              ref={filterRef}
            />
            <Box sx={{ mb: 2 }}>

              <Button
                variant="contained"
                onClick={handleNext}
                sx={{ mt: 1, mr: 1 }}
              >
                確定
              </Button>
              <Button
                onClick={handleBack}
                sx={{ mt: 1, mr: 1 }}
              >
                戻る
              </Button>

            </Box>
          </StepContent>
        </Step>

      </Stepper>
    </Box>
  );
}