import styled from '@emotion/styled'

export const ModalTextBodyContainer = styled.div`
  padding: 0 20px;

  .description-container {
    .message-skeleton {
      width: 80%;
      height: 20px;
    }
    .description {
      font-size: 1em;
    }
    padding: 5px 0 20px 0;
  }

  .title-container {
    .message-skeleton {
      width: 100%;
      height: 80px;
      border-radius: 8px;
    }

    .title {
      font-size: 1.2em;
    }
    padding: 10px 0;
  }
`

type MessageContainerProps = {
  skeleton?: {
    width?: string
    height?: string
    borderRaidus?: string
  }
  fontSize?: string
  padding?: string
}

export const MessageContainer = styled.div<MessageContainerProps>`
  width: 100%;
  font-size: ${({ fontSize }) => fontSize};
  padding: ${({ padding }) => padding};
`
