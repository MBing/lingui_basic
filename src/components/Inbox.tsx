import { Plural, Trans } from "@lingui/macro";
import { useLingui } from "@lingui/react";

export default function Inbox({ name }: { name: string }) {
  const { i18n } = useLingui();
  const messages = [{}, {}];
  const messagesCount = messages.length;
  const lastLogin = new Date();
  const markAsRead = () => {
    alert("Marked as read.");
  };

  return (
    <div>
      <h1>
        <Trans>Message Inbox</Trans>
      </h1>

      <p>
        <Trans>
          See all <a href="/unread">unread messages</a>
          {" or "}
          <a onClick={markAsRead}>mark them</a> as read.
        </Trans>
      </p>

      <p>
        <Plural
          value={messagesCount}
          _0="There are no messages in your inbox"
          one={`There's # message in your inbox, ${name}`}
          other={`There are <strong>#</strong> messages in your inbox, ${name}`}
        />
      </p>

      <footer>
        <Trans>Last login on {i18n.date(lastLogin)}.</Trans>
      </footer>
    </div>
  );
}
