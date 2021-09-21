import NextDocument, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

class Document extends NextDocument {
  static override async getInitialProps(documentContext: DocumentContext) {
    const initialProps = await NextDocument.getInitialProps(documentContext);

    return { ...initialProps };
  }

  override render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
