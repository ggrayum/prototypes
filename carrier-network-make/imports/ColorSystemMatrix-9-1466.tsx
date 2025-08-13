import svgPaths from "./svg-8qz9e3eiwk";

function Swatch() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start p-0 relative self-stretch shrink-0 w-[500px]"
      data-name="swatch"
    >
      <div className="basis-0 bg-neutral-50 grow h-full min-h-px min-w-px rounded-[10px] shrink-0" />
      <div className="basis-0 bg-[#f4f5f5] grow h-full min-h-px min-w-px rounded-[10px] shrink-0" />
      <div className="basis-0 bg-[#edeeee] grow h-full min-h-px min-w-px mix-blend-multiply rounded-[10px] shrink-0" />
      <div className="basis-0 bg-[#dfe2e2] grow h-full min-h-px min-w-px rounded-[10px] shrink-0" />
      <div className="basis-0 bg-[#ced1d4] grow h-full min-h-px min-w-px rounded-[10px] shrink-0" />
      <div className="basis-0 bg-[#b1b6be] grow h-full min-h-px min-w-px rounded-[10px] shrink-0" />
      <div className="basis-0 bg-[#8f94a3] grow h-full min-h-px min-w-px rounded-[10px] shrink-0" />
      <div className="basis-0 bg-[#6a7081] grow h-full min-h-px min-w-px rounded-[10px] shrink-0" />
      <div className="basis-0 bg-[#535865] grow h-full min-h-px min-w-px rounded-[10px] shrink-0" />
      <div className="basis-0 bg-[#41454e] grow h-full min-h-px min-w-px rounded-[10px] shrink-0" />
      <div className="basis-0 bg-[#2f3337] grow h-full min-h-px min-w-px rounded-[10px] shrink-0" />
      <div className="basis-0 bg-[#1f1f23] grow h-full min-h-px min-w-px rounded-[10px] shrink-0" />
    </div>
  );
}

function Text() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col font-['Roboto:Regular',_sans-serif] font-normal gap-5 grow items-start justify-start leading-[0] min-h-px min-w-px p-0 relative shrink-0 text-[#000000] text-left tracking-[0.32px]"
      data-name="text"
    >
      <div className="relative shrink-0 text-[64px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="block leading-[normal]">Gray</p>
      </div>
      <div className="relative shrink-0 text-[48px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="block leading-[normal]">
          Predominant non-white color. Used for most text and icons, and to define the structure and layers of interface
          elements.
        </p>
      </div>
    </div>
  );
}

function ColorBand() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[100px] items-start justify-start p-0 relative shrink-0 w-full"
      data-name="color band"
    >
      <Swatch />
      <Text />
    </div>
  );
}

function Blue() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start p-0 relative self-stretch shrink-0 w-[500px]"
      data-name="Blue"
    >
      <div className="basis-0 bg-[#f6fafe] grow h-full min-h-px min-w-px mix-blend-multiply rounded-[10px] shrink-0" />
      <div className="basis-0 bg-[#eaf6ff] grow h-full min-h-px min-w-px rounded-[10px] shrink-0" />
      <div className="basis-0 bg-[#e3f1fc] grow h-full min-h-px min-w-px rounded-[10px] shrink-0" />
      <div className="basis-0 bg-[#c8e4f9] grow h-full min-h-px min-w-px rounded-[10px] shrink-0" />
      <div className="basis-0 bg-[#aed6f9] grow h-full min-h-px min-w-px rounded-[10px] shrink-0" />
      <div className="basis-0 bg-[#7abcf5] grow h-full min-h-px min-w-px rounded-[10px] shrink-0" />
      <div className="basis-0 bg-[#3298f1] grow h-full min-h-px min-w-px rounded-[10px] shrink-0" />
      <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          role="presentation"
          viewBox="0 0 33 151"
        >
          <path d={svgPaths.p26094d72} fill="var(--fill-0, #0E71C8)" id="Rectangle 185" />
        </svg>
      </div>
      <div className="basis-0 bg-[#0b599d] grow h-full min-h-px min-w-px rounded-[10px] shrink-0" />
      <div className="basis-0 bg-[#09467b] grow h-full min-h-px min-w-px rounded-[10px] shrink-0" />
      <div className="basis-0 bg-[#07365f] grow h-full min-h-px min-w-px rounded-[10px] shrink-0" />
      <div className="basis-0 bg-[#062432] grow h-full min-h-px min-w-px rounded-[10px] shrink-0" />
    </div>
  );
}

function Text1() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col font-['Roboto:Regular',_sans-serif] font-normal gap-5 grow items-start justify-start leading-[0] min-h-px min-w-px p-0 relative shrink-0 text-[#000000] text-left tracking-[0.32px]"
      data-name="text"
    >
      <div className="relative shrink-0 text-[64px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="block leading-[normal]">Blue</p>
      </div>
      <div className="relative shrink-0 text-[48px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="block leading-[normal]">
          Primary color. Used mainly to navigate the user in a direction of action.
        </p>
      </div>
    </div>
  );
}

function ColorBand1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[100px] items-start justify-start p-0 relative shrink-0 w-full"
      data-name="color band"
    >
      <Blue />
      <Text1 />
    </div>
  );
}

function Green() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start p-0 relative self-stretch shrink-0 w-[500px]"
      data-name="Green"
    >
      <div className="basis-0 bg-[#f2fdf8] grow h-full min-h-px min-w-px mix-blend-multiply rounded-[10px] shrink-0" />
      <div className="basis-0 bg-[#dffbef] grow h-full min-h-px min-w-px mix-blend-multiply rounded-[10px] shrink-0" />
      <div className="basis-0 bg-[#cff7e4] grow h-full min-h-px min-w-px rounded-[10px] shrink-0" />
      <div className="basis-0 bg-[#aaeed6] grow h-full min-h-px min-w-px rounded-[10px] shrink-0" />
      <div className="basis-0 bg-[#80e5c0] grow h-full min-h-px min-w-px rounded-[10px] shrink-0" />
      <div className="basis-0 bg-[#2acf93] grow h-full min-h-px min-w-px rounded-[10px] shrink-0" />
      <div className="basis-0 bg-[#22a575] grow h-full min-h-px min-w-px rounded-[10px] shrink-0" />
      <div className="basis-0 bg-[#1a7f5a] grow h-full min-h-px min-w-px rounded-[10px] shrink-0" />
      <div className="basis-0 bg-[#146145] grow h-full min-h-px min-w-px rounded-[10px] shrink-0" />
      <div className="basis-0 bg-[#0f4d36] grow h-full min-h-px min-w-px rounded-[10px] shrink-0" />
      <div className="basis-0 bg-[#0b3c2a] grow h-full min-h-px min-w-px rounded-[10px] shrink-0" />
      <div className="basis-0 bg-[#052418] grow h-full min-h-px min-w-px rounded-[10px] shrink-0" />
    </div>
  );
}

function Text2() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col font-['Roboto:Regular',_sans-serif] font-normal gap-5 grow items-start justify-start leading-[0] min-h-px min-w-px p-0 relative shrink-0 text-[#000000] text-left tracking-[0.32px]"
      data-name="text"
    >
      <div className="relative shrink-0 text-[64px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="block leading-[normal]">Green</p>
      </div>
      <div className="relative shrink-0 text-[48px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="block leading-[normal]">
          Secondary color. Used to indicate something is active, completed, successful, etc.
        </p>
      </div>
    </div>
  );
}

function ColorBand2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[100px] items-start justify-start p-0 relative shrink-0 w-full"
      data-name="color band"
    >
      <Green />
      <Text2 />
    </div>
  );
}

function Purple() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start p-0 relative self-stretch shrink-0 w-[500px]"
      data-name="Purple"
    >
      <div className="basis-0 bg-[#f9f7fd] grow h-full min-h-px min-w-px rounded-[10px] shrink-0" />
      <div className="basis-0 bg-[#f6f2ff] grow h-full min-h-px min-w-px rounded-[10px] shrink-0" />
      <div className="basis-0 bg-[#f6edfd] grow h-full min-h-px min-w-px mix-blend-multiply rounded-[10px] shrink-0" />
      <div className="basis-0 bg-[#ecdbfa] grow h-full min-h-px min-w-px rounded-[10px] shrink-0" />
      <div className="basis-0 bg-[#dfc7f5] grow h-full min-h-px min-w-px rounded-[10px] shrink-0" />
      <div className="basis-0 bg-[#cca6ed] grow h-full min-h-px min-w-px rounded-[10px] shrink-0" />
      <div className="basis-0 bg-[#b37ce4] grow h-full min-h-px min-w-px rounded-[10px] shrink-0" />
      <div className="basis-0 bg-[#9649da] grow h-full min-h-px min-w-px rounded-[10px] shrink-0" />
      <div className="basis-0 bg-[#7a29c2] grow h-full min-h-px min-w-px rounded-[10px] shrink-0" />
      <div className="basis-0 bg-[#62219c] grow h-full min-h-px min-w-px rounded-[10px] shrink-0" />
      <div className="basis-0 bg-[#4d1a7a] grow h-full min-h-px min-w-px rounded-[10px] shrink-0" />
      <div className="basis-0 bg-[#300f4d] grow h-full min-h-px min-w-px mix-blend-multiply rounded-[10px] shrink-0" />
    </div>
  );
}

function Text3() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col font-['Roboto:Regular',_sans-serif] font-normal gap-5 grow items-start justify-start leading-[0] min-h-px min-w-px p-0 relative shrink-0 text-[#000000] text-left tracking-[0.32px]"
      data-name="text"
    >
      <div className="relative shrink-0 text-[64px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="block leading-[normal]">Purple</p>
      </div>
      <div className="relative shrink-0 text-[48px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="block leading-[normal]">
          Secondary color. Accent to show the user where they are, or to provide other accents without diluting the
          meaning of blue.
        </p>
      </div>
    </div>
  );
}

function ColorBand3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[100px] items-start justify-start p-0 relative shrink-0 w-full"
      data-name="color band"
    >
      <Purple />
      <Text3 />
    </div>
  );
}

function Yellow() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start p-0 relative self-stretch shrink-0 w-[500px]"
      data-name="Yellow"
    >
      <div className="basis-0 bg-[#fefaec] grow h-full min-h-px min-w-px mix-blend-multiply rounded-[10px] shrink-0" />
      <div className="basis-0 bg-[#fff4cc] grow h-full min-h-px min-w-px mix-blend-multiply rounded-[10px] shrink-0" />
      <div className="basis-0 bg-[#feefb9] grow h-full min-h-px min-w-px rounded-[10px] shrink-0" />
      <div className="basis-0 bg-[#fee071] grow h-full min-h-px min-w-px rounded-[10px] shrink-0" />
      <div className="basis-0 bg-[#fecd1b] grow h-full min-h-px min-w-px rounded-[10px] shrink-0" />
      <div className="basis-0 bg-[#dfaf01] grow h-full min-h-px min-w-px rounded-[10px] shrink-0" />
      <div className="basis-0 bg-[#b78f01] grow h-full min-h-px min-w-px rounded-[10px] shrink-0" />
      <div className="basis-0 bg-[#896b01] grow h-full min-h-px min-w-px rounded-[10px] shrink-0" />
      <div className="basis-0 bg-[#6a5301] grow h-full min-h-px min-w-px rounded-[10px] shrink-0" />
      <div className="basis-0 bg-[#564301] grow h-full min-h-px min-w-px rounded-[10px] shrink-0" />
      <div className="basis-0 bg-[#413201] grow h-full min-h-px min-w-px rounded-[10px] shrink-0" />
      <div className="basis-0 bg-[#281f01] grow h-full min-h-px min-w-px rounded-[10px] shrink-0" />
    </div>
  );
}

function Text4() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col font-['Roboto:Regular',_sans-serif] font-normal gap-5 grow items-start justify-start leading-[0] min-h-px min-w-px p-0 relative shrink-0 text-[#000000] text-left tracking-[0.32px]"
      data-name="text"
    >
      <div className="relative shrink-0 text-[64px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="block leading-[normal]">Yellow</p>
      </div>
      <div className="relative shrink-0 text-[48px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="block leading-[normal]">
          Tertiary color. Used sparingly to indicate a warning or that something is pending, delayed, etc.
        </p>
      </div>
    </div>
  );
}

function ColorBand4() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[100px] items-start justify-start p-0 relative shrink-0 w-full"
      data-name="color band"
    >
      <Yellow />
      <Text4 />
    </div>
  );
}

function Red() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start p-0 relative self-stretch shrink-0 w-[500px]"
      data-name="Red"
    >
      <div className="basis-0 bg-[#fdf7f7] grow h-full min-h-px min-w-px mix-blend-multiply rounded-[10px] shrink-0" />
      <div className="basis-0 bg-[#fff1f1] grow h-full min-h-px min-w-px mix-blend-multiply rounded-[10px] shrink-0" />
      <div className="basis-0 bg-[#fdeded] grow h-full min-h-px min-w-px rounded-[10px] shrink-0" />
      <div className="basis-0 bg-[#fbdada] grow h-full min-h-px min-w-px rounded-[10px] shrink-0" />
      <div className="basis-0 bg-[#f9c5c3] grow h-full min-h-px min-w-px rounded-[10px] shrink-0" />
      <div className="basis-0 bg-[#f8a09b] grow h-full min-h-px min-w-px rounded-[10px] shrink-0" />
      <div className="basis-0 bg-[#ef6861] grow h-full min-h-px min-w-px rounded-[10px] shrink-0" />
      <div className="basis-0 bg-[#da1f16] grow h-full min-h-px min-w-px rounded-[10px] shrink-0" />
      <div className="basis-0 bg-[#b01911] grow h-full min-h-px min-w-px rounded-[10px] shrink-0" />
      <div className="basis-0 bg-[#8b140e] grow h-full min-h-px min-w-px rounded-[10px] shrink-0" />
      <div className="basis-0 bg-[#6d0e09] grow h-full min-h-px min-w-px rounded-[10px] shrink-0" />
      <div className="basis-0 bg-[#460806] grow h-full min-h-px min-w-px rounded-[10px] shrink-0" />
    </div>
  );
}

function Text5() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col font-['Roboto:Regular',_sans-serif] font-normal gap-5 grow items-start justify-start leading-[0] min-h-px min-w-px p-0 relative shrink-0 text-[#000000] text-left tracking-[0.32px]"
      data-name="text"
    >
      <div className="relative shrink-0 text-[64px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="block leading-[normal]">Red</p>
      </div>
      <div className="relative shrink-0 text-[48px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="block leading-[normal] whitespace-pre-wrap">{`Tertiary color. Used sparingly to indicate  an error or a destructive action, such as deleting content.`}</p>
      </div>
    </div>
  );
}

function ColorBand5() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[100px] items-start justify-start p-0 relative shrink-0 w-full"
      data-name="color band"
    >
      <Red />
      <Text5 />
    </div>
  );
}

function System() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[100px] items-start justify-start pb-[200px] pt-[100px] px-0 relative shrink-0 w-full"
      data-name="system"
    >
      <ColorBand />
      <ColorBand1 />
      <ColorBand2 />
      <ColorBand3 />
      <ColorBand4 />
      <ColorBand5 />
    </div>
  );
}

function Documentation() {
  return (
    <div className="bg-[#ffffff] relative rounded-[100px] shrink-0 w-full" data-name="Documentation">
      <div className="flex flex-col justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[100px] items-start justify-center p-[200px] relative w-full">
          <div className="[text-shadow:rgba(0,0,0,0.08)_0px_1px_2px] font-['Inter:Black',_sans-serif] font-black h-[300px] leading-[0] not-italic relative shrink-0 text-[#2f3337] text-[128px] text-center tracking-[0.32px] w-full">
            <p className="block leading-[normal]">Color System Matrix v1.2</p>
          </div>
          <div
            className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#000000] text-[48px] text-center tracking-[0.32px] w-full"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="block leading-[normal] mb-0">{`The Fleet color system offers a carefully selected set of colors designed for accessibility. `}</p>
            <p className="block leading-[normal] mb-0">{`The colors are derived from the Turvo branding guidelines. The number of each series (105, 300, 500, etc) is based on the contrast ratio on white. `}</p>
            <p className="block leading-[normal] mb-0">
              This makes it easy to always select the right shade to meet accessibility standards. Examples:
            </p>
            <p className="block leading-[normal] mb-0">&nbsp;</p>
            <ul className="css-ed5n1g list-disc">
              <li className="mb-0 ms-[72px]">
                <span className="leading-[normal]">Blue 105 has a 1.05:1 contrast ratio (not accessible)</span>
              </li>
              <li className="mb-0 ms-[72px]">
                <span className="leading-[normal]">
                  Blue 300 has a 3.0:1 contrast ratio. (passes WCAG AA for Large Text)
                </span>
              </li>
              <li className="ms-[72px]">
                <span className="leading-[normal]">
                  Blue 500 has a 5.0:1 contrast ratio (passes WCAG AA for Normal text)
                </span>
              </li>
            </ul>
          </div>
          <System />
        </div>
      </div>
    </div>
  );
}

function Frame322() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 h-[1220px] items-center justify-end pl-2 pr-[47px] py-2 relative shrink-0">
      <div
        aria-hidden="true"
        className="absolute border-[#8f94a3] border-[0px_10px_0px_0px] border-solid inset-0 pointer-events-none"
      />
      <div
        className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#41454e] text-[32px] text-center tracking-[0.32px] w-[292px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[normal]">Minimum accessibility standards (white background)</p>
      </div>
    </div>
  );
}

function Note() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2.5 h-full items-end justify-start pb-0 pt-[2870px] px-0 relative shrink-0"
      data-name="note"
    >
      <Frame322 />
    </div>
  );
}

function Frame323() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 h-[400px] items-center justify-end pl-2 pr-[47px] py-2 relative shrink-0">
      <div
        aria-hidden="true"
        className="absolute border-[#8f94a3] border-[0px_10px_0px_0px] border-solid inset-0 pointer-events-none"
      />
      <div
        className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center leading-[normal] relative shrink-0 text-[#41454e] text-[32px] text-center tracking-[0.32px] w-[292px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block mb-0">Passes WCAG</p>
        <p className="adjustLetterSpacing block">AA for Large Text, Graphical Objects and User Interface Components</p>
      </div>
    </div>
  );
}

function Frame321() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 h-[400px] items-center justify-end pl-2 pr-[47px] py-2 relative shrink-0">
      <div
        aria-hidden="true"
        className="absolute border-[#6a7081] border-[0px_10px_0px_0px] border-solid inset-0 pointer-events-none"
      />
      <div
        className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center leading-[normal] relative shrink-0 text-[#41454e] text-[32px] text-center text-nowrap tracking-[0.32px] whitespace-pre"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block mb-0">Passes WCAG</p>
        <p className="adjustLetterSpacing block mb-0">AA for</p>
        <p className="adjustLetterSpacing block mb-0">Normal text</p>
        <p className="adjustLetterSpacing block">AAA for Large Text</p>
      </div>
    </div>
  );
}

function Frame320() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 h-[400px] items-center justify-end pl-2 pr-[47px] py-2 relative shrink-0">
      <div
        aria-hidden="true"
        className="absolute border-[#535865] border-[0px_10px_0px_0px] border-solid inset-0 pointer-events-none"
      />
      <div
        className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#41454e] text-[32px] text-center tracking-[0.32px] w-[292px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[normal]">Passes WCAG AAA for Normal text</p>
      </div>
    </div>
  );
}

function Note1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2.5 h-full items-end justify-start pb-0 pt-[2870px] px-0 relative shrink-0"
      data-name="note"
    >
      <Frame323 />
      <Frame321 />
      <Frame320 />
    </div>
  );
}

function Note2() {
  return (
    <div
      className="box-border content-stretch flex flex-col font-['Roboto:Bold',_sans-serif] font-bold gap-[332px] items-start justify-start leading-[0] p-0 relative shrink-0 text-[#41454e] text-[48px] text-center"
      data-name="note"
    >
      <div
        className="flex flex-col h-[76px] justify-center relative shrink-0 w-[205px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[56px]">000</p>
      </div>
      <div
        className="flex flex-col h-[76px] justify-center relative shrink-0 w-[205px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[56px]">{`105 `}</p>
      </div>
      <div
        className="flex flex-col h-[76px] justify-center relative shrink-0 w-[205px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[56px]">110</p>
      </div>
      <div
        className="flex flex-col h-[76px] justify-center relative shrink-0 w-[205px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[56px]">{`115 `}</p>
      </div>
      <div
        className="flex flex-col h-[76px] justify-center relative shrink-0 w-[205px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[56px]">{`130 `}</p>
      </div>
      <div
        className="flex flex-col h-[76px] justify-center relative shrink-0 w-[205px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[56px]">{`150 `}</p>
      </div>
      <div
        className="flex flex-col h-[76px] justify-center relative shrink-0 w-[205px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[56px]">{`200 `}</p>
      </div>
      <div
        className="flex flex-col h-[76px] justify-center relative shrink-0 w-[205px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[56px]">{`300 `}</p>
      </div>
      <div
        className="flex flex-col h-[76px] justify-center relative shrink-0 w-[205px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[56px]">{`500 `}</p>
      </div>
      <div
        className="flex flex-col h-[76px] justify-center relative shrink-0 w-[205px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[56px]">{`700 `}</p>
      </div>
      <div
        className="flex flex-col h-[76px] justify-center relative shrink-0 w-[205px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[56px]">{`950 `}</p>
      </div>
      <div
        className="flex flex-col h-[76px] justify-center relative shrink-0 w-[205px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[56px]">{`1200 `}</p>
      </div>
      <div
        className="flex flex-col h-[76px] justify-center relative shrink-0 w-[205px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[56px]">{`1600 `}</p>
      </div>
    </div>
  );
}

function Gray() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-0 relative shrink-0 w-[400px]"
      data-name="Gray"
    >
      <div className="bg-[#ffffff] h-[400px] relative rounded-[36px] shrink-0 w-full">
        <div
          aria-hidden="true"
          className="absolute border-[#dfe2e2] border-[5px] border-solid inset-0 pointer-events-none rounded-[36px]"
        />
      </div>
      <div className="bg-neutral-50 h-[400px] rounded-[36px] shrink-0 w-full" />
      <div className="bg-[#f4f5f5] h-[400px] rounded-[36px] shrink-0 w-full" />
      <div className="bg-[#edeeee] h-[400px] mix-blend-multiply rounded-[36px] shrink-0 w-full" />
      <div className="bg-[#dfe2e2] h-[400px] rounded-[36px] shrink-0 w-full" />
      <div className="bg-[#ced1d4] h-[400px] rounded-[36px] shrink-0 w-full" />
      <div className="bg-[#b1b6be] h-[400px] rounded-[36px] shrink-0 w-full" />
      <div className="bg-[#8f94a3] h-[400px] rounded-[36px] shrink-0 w-full" />
      <div className="bg-[#6a7081] h-[400px] rounded-[36px] shrink-0 w-full" />
      <div className="bg-[#535865] h-[400px] rounded-[36px] shrink-0 w-full" />
      <div className="bg-[#41454e] h-[400px] rounded-[36px] shrink-0 w-full" />
      <div className="bg-[#2f3337] h-[400px] rounded-[36px] shrink-0 w-full" />
      <div className="bg-[#1f1f23] h-[400px] rounded-[36px] shrink-0 w-full" />
      <div
        className="absolute flex flex-col font-['Roboto:Regular',_sans-serif] font-normal h-[323px] justify-center leading-[normal] left-[60px] text-[#6a7081] text-[48px] text-left top-[610.5px] tracking-[0.32px] translate-y-[-50%] w-[280px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block mb-0">{`Product background `}</p>
        <p className="adjustLetterSpacing block">color</p>
      </div>
    </div>
  );
}

function Blue1() {
  return (
    <div className="h-[5320px] relative shrink-0 w-[400px]" data-name="Blue">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 400 5320">
        <g id="Blue">
          <g id="Rectangle 143">
            <rect
              fill="var(--fill-0, white)"
              height="395"
              rx="33.5"
              style={{ mixBlendMode: "multiply" }}
              width="395"
              x="2.5"
              y="2.5"
            />
            <rect
              height="395"
              rx="33.5"
              stroke="var(--stroke-0, #C8E4F9)"
              strokeWidth="5"
              width="395"
              x="2.5"
              y="2.5"
            />
          </g>
          <g id="Rectangle 210">
            <rect
              fill="var(--fill-0, #F6FAFE)"
              height="400"
              rx="36"
              style={{ mixBlendMode: "multiply" }}
              width="400"
              y="410"
            />
          </g>
          <rect fill="var(--fill-0, #EAF6FF)" height="400" id="Rectangle 149" rx="36" width="400" y="820" />
          <rect fill="var(--fill-0, #E3F1FC)" height="400" id="Rectangle 155" rx="36" width="400" y="1230" />
          <rect fill="var(--fill-0, #C8E4F9)" height="400" id="Rectangle 161" rx="36" width="400" y="1640" />
          <rect fill="var(--fill-0, #AED6F9)" height="400" id="Rectangle 167" rx="36" width="400" y="2050" />
          <rect fill="var(--fill-0, #7ABCF5)" height="400" id="Rectangle 173" rx="36" width="400" y="2460" />
          <path d={svgPaths.p14814700} fill="var(--fill-0, #3298F1)" id="Rectangle 179" />
          <path d={svgPaths.p3c064800} fill="var(--fill-0, #0E71C8)" id="Rectangle 185" />
          <rect fill="var(--fill-0, #0B599D)" height="400" id="Rectangle 191" rx="36" width="400" y="3690" />
          <rect fill="var(--fill-0, #09467B)" height="400" id="Rectangle 197" rx="36" width="400" y="4100" />
          <rect fill="var(--fill-0, #07365F)" height="400" id="Rectangle 203" rx="36" width="400" y="4510" />
          <rect fill="var(--fill-0, #062432)" height="400" id="Rectangle 209" rx="36" width="400" y="4920" />
        </g>
      </svg>
    </div>
  );
}

function Green1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-0 relative shrink-0 w-[400px]"
      data-name="Green"
    >
      <div className="bg-[#ffffff] h-[400px] mix-blend-multiply relative rounded-[36px] shrink-0 w-full">
        <div
          aria-hidden="true"
          className="absolute border-[#aaeed6] border-[5px] border-solid inset-0 pointer-events-none rounded-[36px]"
        />
      </div>
      <div className="bg-[#f2fdf8] h-[400px] mix-blend-multiply rounded-[36px] shrink-0 w-full" />
      <div className="bg-[#dffbef] h-[400px] mix-blend-multiply rounded-[36px] shrink-0 w-full" />
      <div className="bg-[#cff7e4] h-[400px] rounded-[36px] shrink-0 w-full" />
      <div className="bg-[#aaeed6] h-[400px] rounded-[36px] shrink-0 w-full" />
      <div className="bg-[#80e5c0] h-[400px] rounded-[36px] shrink-0 w-full" />
      <div className="bg-[#2acf93] h-[400px] rounded-[36px] shrink-0 w-full" />
      <div className="bg-[#22a575] h-[400px] rounded-[36px] shrink-0 w-full" />
      <div className="bg-[#1a7f5a] h-[400px] rounded-[36px] shrink-0 w-full" />
      <div className="bg-[#146145] h-[400px] rounded-[36px] shrink-0 w-full" />
      <div className="bg-[#0f4d36] h-[400px] rounded-[36px] shrink-0 w-full" />
      <div className="bg-[#0b3c2a] h-[400px] rounded-[36px] shrink-0 w-full" />
      <div className="bg-[#052418] h-[400px] rounded-[36px] shrink-0 w-full" />
    </div>
  );
}

function Purple1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-0 relative shrink-0 w-[400px]"
      data-name="Purple"
    >
      <div className="bg-[#ffffff] h-[400px] relative rounded-[36px] shrink-0 w-full">
        <div
          aria-hidden="true"
          className="absolute border-[#ecdbfa] border-[5px] border-solid inset-0 pointer-events-none rounded-[36px]"
        />
      </div>
      <div className="bg-[#f9f7fd] h-[400px] rounded-[36px] shrink-0 w-full" />
      <div className="bg-[#f6f2ff] h-[400px] rounded-[36px] shrink-0 w-full" />
      <div className="bg-[#f6edfd] h-[400px] mix-blend-multiply rounded-[36px] shrink-0 w-full" />
      <div className="bg-[#ecdbfa] h-[400px] rounded-[36px] shrink-0 w-full" />
      <div className="bg-[#dfc7f5] h-[400px] rounded-[36px] shrink-0 w-full" />
      <div className="bg-[#cca6ed] h-[400px] rounded-[36px] shrink-0 w-full" />
      <div className="bg-[#b37ce4] h-[400px] rounded-[36px] shrink-0 w-full" />
      <div className="bg-[#9649da] h-[400px] rounded-[36px] shrink-0 w-full" />
      <div className="bg-[#7a29c2] h-[400px] rounded-[36px] shrink-0 w-full" />
      <div className="bg-[#62219c] h-[400px] rounded-[36px] shrink-0 w-full" />
      <div className="bg-[#4d1a7a] h-[400px] rounded-[36px] shrink-0 w-full" />
      <div className="bg-[#300f4d] h-[400px] mix-blend-multiply rounded-[36px] shrink-0 w-full" />
    </div>
  );
}

function Yellow1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-0 relative shrink-0 w-[400px]"
      data-name="Yellow"
    >
      <div className="bg-[#ffffff] h-[400px] mix-blend-multiply relative rounded-[36px] shrink-0 w-full">
        <div
          aria-hidden="true"
          className="absolute border-[#fee071] border-[5px] border-solid inset-0 pointer-events-none rounded-[36px]"
        />
      </div>
      <div className="bg-[#fefaec] h-[400px] mix-blend-multiply rounded-[36px] shrink-0 w-full" />
      <div className="bg-[#fff4cc] h-[400px] mix-blend-multiply rounded-[36px] shrink-0 w-full" />
      <div className="bg-[#feefb9] h-[400px] rounded-[36px] shrink-0 w-full" />
      <div className="bg-[#fee071] h-[400px] rounded-[36px] shrink-0 w-full" />
      <div className="bg-[#fecd1b] h-[400px] rounded-[36px] shrink-0 w-full" />
      <div className="bg-[#dfaf01] h-[400px] rounded-[36px] shrink-0 w-full" />
      <div className="bg-[#b78f01] h-[400px] rounded-[36px] shrink-0 w-full" />
      <div className="bg-[#896b01] h-[400px] rounded-[36px] shrink-0 w-full" />
      <div className="bg-[#6a5301] h-[400px] rounded-[36px] shrink-0 w-full" />
      <div className="bg-[#564301] h-[400px] rounded-[36px] shrink-0 w-full" />
      <div className="bg-[#413201] h-[400px] rounded-[36px] shrink-0 w-full" />
      <div className="bg-[#281f01] h-[400px] rounded-[36px] shrink-0 w-full" />
    </div>
  );
}

function Red1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-0 relative shrink-0 w-[400px]"
      data-name="Red"
    >
      <div className="bg-[#ffffff] h-[400px] mix-blend-multiply relative rounded-[36px] shrink-0 w-full">
        <div
          aria-hidden="true"
          className="absolute border-[#fbdada] border-[5px] border-solid inset-0 pointer-events-none rounded-[36px]"
        />
      </div>
      <div className="bg-[#fdf7f7] h-[400px] mix-blend-multiply rounded-[36px] shrink-0 w-full" />
      <div className="bg-[#fff1f1] h-[400px] mix-blend-multiply rounded-[36px] shrink-0 w-full" />
      <div className="bg-[#fdeded] h-[400px] rounded-[36px] shrink-0 w-full" />
      <div className="bg-[#fbdada] h-[400px] rounded-[36px] shrink-0 w-full" />
      <div className="bg-[#f9c5c3] h-[400px] rounded-[36px] shrink-0 w-full" />
      <div className="bg-[#f8a09b] h-[400px] rounded-[36px] shrink-0 w-full" />
      <div className="bg-[#ef6861] h-[400px] rounded-[36px] shrink-0 w-full" />
      <div className="bg-[#da1f16] h-[400px] rounded-[36px] shrink-0 w-full" />
      <div className="bg-[#b01911] h-[400px] rounded-[36px] shrink-0 w-full" />
      <div className="bg-[#8b140e] h-[400px] rounded-[36px] shrink-0 w-full" />
      <div className="bg-[#6d0e09] h-[400px] rounded-[36px] shrink-0 w-full" />
      <div className="bg-[#460806] h-[400px] rounded-[36px] shrink-0 w-full" />
    </div>
  );
}

function Use() {
  return (
    <div
      className="box-border content-stretch flex flex-col font-['Roboto:Bold',_sans-serif] font-bold gap-[352px] items-start justify-center leading-[0] pl-24 pr-0 py-0 relative shrink-0 text-[#41454e] text-[48px]"
      data-name="use"
    >
      <div
        className="flex flex-col justify-center relative shrink-0 text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[56px] whitespace-pre">White</p>
      </div>
      <div
        className="flex flex-col justify-center relative shrink-0 text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[56px] whitespace-pre">Background - Light</p>
      </div>
      <div
        className="flex flex-col justify-center relative shrink-0 text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[56px] whitespace-pre">Background - Mid</p>
      </div>
      <div
        className="flex flex-col justify-center relative shrink-0 text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[56px] whitespace-pre">Background - Dark</p>
      </div>
      <div
        className="flex flex-col justify-center relative shrink-0 text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[56px] whitespace-pre">Border - light (default)</p>
      </div>
      <div
        className="flex flex-col justify-center relative shrink-0 text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[56px] whitespace-pre">Border - Mid</p>
      </div>
      <div
        className="flex flex-col justify-center relative shrink-0 text-center w-[304px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[56px]">Border - dark</p>
      </div>
      <div
        className="flex flex-col h-14 justify-center leading-[56px] relative shrink-0 text-left w-[291px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block mb-0">Icon - default</p>
        <p className="block">Accent - light</p>
      </div>
      <div
        className="flex flex-col h-14 justify-center leading-[56px] relative shrink-0 text-left w-[346px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block mb-0">Text - Light</p>
        <p className="block">Accent - default</p>
      </div>
      <div
        className="flex flex-col justify-center relative shrink-0 text-left w-[390px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[56px]">Accent - dark</p>
      </div>
      <div
        className="flex flex-col justify-center relative shrink-0 text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[56px] whitespace-pre">Text - Deafult</p>
      </div>
      <div
        className="flex flex-col justify-center relative shrink-0 text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[56px] whitespace-pre">Text - dark-headers</p>
      </div>
      <div
        className="flex flex-col justify-center relative shrink-0 text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[56px] whitespace-pre">Background - inverse</p>
      </div>
    </div>
  );
}

function Swatch1() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-[200px] relative rounded-[100px] shrink-0"
      data-name="Swatch"
    >
      <div className="flex flex-row items-center self-stretch">
        <Note />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Note1 />
      </div>
      <Note2 />
      <Gray />
      <Blue1 />
      <Green1 />
      <Purple1 />
      <Yellow1 />
      <Red1 />
      <Use />
    </div>
  );
}

export default function ColorSystemMatrix() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[100px] items-start justify-center p-0 relative size-full"
      data-name="Color System Matrix"
    >
      <Documentation />
      <Swatch1 />
    </div>
  );
}