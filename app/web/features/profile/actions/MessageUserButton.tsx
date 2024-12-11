import Button from "components/Button";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import useAccountInfo from "features/auth/useAccountInfo";
import { useTranslation } from "i18n";
import { PROFILE } from "i18n/namespaces";
import { useRouter } from "next/router";
import { User } from "proto/api_pb";
import { useState } from "react";
import { useMutation } from "react-query";
import { getDirectMessage, sendMessage, createGroupChat } from "service/conversations";
import { routeToCreateMessage } from "routes";

export default function MessageUserButton({
  user,
  setMutationError,
}: {
  user: User.AsObject;
  setMutationError: (value: string) => void;
}) {
  const { t } = useTranslation(PROFILE);
  const router = useRouter();
  const [message, setMessage] = useState<string>("");
  const [showMessageDialog, setShowMessageDialog] = useState<boolean>(false);
  const { mutate, isLoading } = useMutation<number | false, Error>(
    () => getDirectMessage(user.userId),
    {
      onMutate() {
        setMutationError("");
      },
      onError(e) {
        setMutationError(e.message);
      },
      onSuccess(data) {
        if (!data) {
          //no existing thread
          router.push(routeToCreateMessage(user.username));
        } else {
          //has thread
          router.push(routeToGroupChat(data));
        }
      },
    }
  );

  const [showCantMessageDialog, setShowCantMessageDialog] =
    useState<boolean>(false);

  const { data: accountInfo, isLoading: isAccountInfoLoading } =
    useAccountInfo();

  const onClick = () => {
    if (!accountInfo?.profileComplete) {
      setShowCantMessageDialog(true);
    } else {
      mutate();
    }
  };

  return (
    <>
         <>
      {/* Message Dialog for entering a message */}
      <Dialog
        open={showMessageDialog}
        onClose={() => setShowMessageDialog(false)}
        maxWidth="sm" // Sets dialog width
        fullWidth // Expands dialog to full width
      >
        <DialogTitle>Message {user.name}</DialogTitle>
        <DialogContent>
          <TextField
            label={t("actions.message_input_label", "Enter your message")} // Fallback label
            fullWidth
            multiline
            rows={5} // Increase input size
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowMessageDialog(false)}>
            {t("actions.cancel", "Cancel")}
          </Button>
          <Button onClick={handleSendMessage} disabled={isSending}>
            {t("actions.send", "Send")}
          </Button>
        </DialogActions>
      </Dialog>
      <Button
        loading={isLoading}
        onClick={onClick}
        disabled={isAccountInfoLoading}
      >
        {t("actions.message_label")}
      </Button>
    </>
  );
}
