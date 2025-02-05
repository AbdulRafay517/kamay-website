export default function QuestionSection() {
    return (
      <section id="question" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h3 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Have a question?
            </h3>
            <a
              href="https://forms.gle/yGf8MoKjoBd78pSa6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
            >
              Click Here
            </a>
          </div>
        </div>
      </section>
    );
  }