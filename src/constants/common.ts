import { Locale } from "@/types/common";

export const LOCALES: Locale[] = ["en", "ko"];

export const NAVIGATION = [
  { title: "Gallery", href: "/gallery" },
  { title: "Artists", href: "/artists" },
  { title: "Blog", href: "/blog" },
  { title: "About", href: "/about" },
];

export const ARTWORKS = [
  {
    id: "1",
    images: [
      "https://images.unsplash.com/photo-1515405295579-ba7b45403062?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?q=80&w=2066&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1646079498497-79c882f22251?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1661028105049-f4d2036774fa?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1638064868404-45d13a8a3076?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    name: "Ethereal Dreams",
    artist: "Lena Vasquez",
    artistId: "1",
    dateOfCreation: "2023-08-15",
    description:
      "A mesmerizing blend of soft pastels and abstract forms, evoking a dreamlike state. This piece captures the fluid nature of emotions, with gentle hues merging into one another, creating an ethereal ambiance. The brushstrokes are intentionally loose, adding to the sense of movement and depth. A truly hypnotic artwork that invites the viewer to escape into a world of serenity and wonder.",
    size: "24x36 inches",
    style: "Abstract",
    price: "4500",
  },
  {
    id: "2",
    images: [
      "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?q=80&w=2066&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1515405295579-ba7b45403062?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1646079498497-79c882f22251?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1661028105049-f4d2036774fa?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1531489956451-20957fab52f2?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    name: "Silent Forest",
    artist: "Marco Lin",
    artistId: "4",
    dateOfCreation: "2021-11-02",
    description:
      "A tranquil depiction of an autumn forest, capturing the beauty of stillness and solitude. The warm golden leaves contrast with the deep shadows between the trees, emphasizing a quiet, introspective atmosphere. This painting invites the viewer to step into the scene, to hear the faint rustle of the leaves and feel the crisp air. Through its delicate brushwork, it conveys a deep sense of peace and connection to nature.",
    size: "30x40 inches",
    style: "Realism",
    price: "3800",
  },
  {
    id: "3",
    images: [
      "https://images.unsplash.com/photo-1646079498497-79c882f22251?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?q=80&w=2066&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1661028105049-f4d2036774fa?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1531489956451-20957fab52f2?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1638064868404-45d13a8a3076?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    name: "Urban Chaos",
    artist: "Sophie Tran",
    artistId: "2",
    dateOfCreation: "2022-06-25",
    description:
      "A vibrant explosion of color and texture, representing the energy of city life. This artwork combines dynamic brushstrokes, overlapping structures, and bursts of neon hues to convey the constant movement of a bustling metropolis. The use of geometric elements alongside organic textures highlights the contrast between human innovation and natural spontaneity. It captures the exhilarating yet overwhelming essence of living in an urban jungle.",
    size: "36x48 inches",
    style: "Expressionism",
    price: "5200",
  },
  {
    id: "4",
    images: [
      "https://images.unsplash.com/photo-1661028105049-f4d2036774fa?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1515405295579-ba7b45403062?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?q=80&w=2066&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1531489956451-20957fab52f2?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1638064868404-45d13a8a3076?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    name: "Moonlit Serenade",
    artist: "Daniel Carter",
    artistId: "5",
    dateOfCreation: "2020-09-10",
    description:
      "A delicate dance of light and shadow, illustrating the magic of a moonlit night. The painting features a quiet lakeside under the silver glow of the full moon, with ripples gently breaking the reflection on the water. The contrast between the dark blues and shimmering highlights creates a sense of depth and mystery. The scene exudes an almost musical quality, as if the moon itself is serenading the peaceful landscape.",
    size: "18x24 inches",
    style: "Impressionism",
    price: "3100",
  },
  {
    id: "5",
    images: [
      "https://images.unsplash.com/photo-1531489956451-20957fab52f2?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1515405295579-ba7b45403062?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?q=80&w=2066&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1646079498497-79c882f22251?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1661028105049-f4d2036774fa?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    name: "Fractured Reality",
    artist: "Isabella Novak",
    artistId: "6",
    dateOfCreation: "2023-01-30",
    description:
      "A striking piece that challenges perception, using fragmented shapes and bold contrasts. Each element in the composition appears disjointed yet harmonized, reflecting the complexities of modern life. The bold color choices and sharp edges create an almost digital feel, questioning the nature of reality itself. This piece invites the viewer to reconsider their perspective and explore the intersection between structure and chaos.",
    size: "32x32 inches",
    style: "Cubism",
    price: "4900",
  },
  {
    id: "6",
    images: [
      "https://images.unsplash.com/photo-1638064868404-45d13a8a3076?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1515405295579-ba7b45403062?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?q=80&w=2066&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1646079498497-79c882f22251?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1531489956451-20957fab52f2?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    name: "Golden Horizon",
    artist: "Ethan Rodriguez",
    artistId: "3",
    dateOfCreation: "2019-07-21",
    description:
      "A breathtaking landscape with warm golden hues, capturing the beauty of a setting sun. The sky transitions from deep orange to soft lavender, reflecting on the calm waters below. The subtle textures in the clouds and the distant mountains add a sense of vastness and tranquility. This painting embodies a fleeting moment of peace, reminding the viewer to appreciate the beauty in the simple yet profound wonders of nature.",
    size: "40x60 inches",
    style: "Landscape",
    price: "6200",
  },
  {
    id: "7",
    images: [
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=1958&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1525690399065-b436c4100577?q=80&w=1960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1512413914633-b5043f4041ea?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1516791478406-b08b576971fb?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1607893378714-007fd47c8719?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    name: "Celestial Whispers",
    artist: "Lena Vasquez",
    artistId: "1",
    dateOfCreation: "2024-02-14",
    description:
      "A celestial-inspired abstract painting featuring swirls of deep blues and cosmic purples. This piece captures the grandeur of the universe with intricate specks of silver that resemble distant stars. The fluidity of the strokes conveys a sense of movement, as if the cosmos itself is whispering secrets through the vast expanse of space. A truly mesmerizing artwork that connects the viewer to the mysteries of the universe.",
    size: "28x42 inches",
    style: "Abstract Expressionism",
    price: "5300",
  },
  {
    id: "8",
    images: [
      "https://images.unsplash.com/photo-1525690399065-b436c4100577?q=80&w=1960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=1958&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1512413914633-b5043f4041ea?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1516791478406-b08b576971fb?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1607893378714-007fd47c8719?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    name: "Shattered Illusions",
    artist: "Marco Lin",
    artistId: "2",
    dateOfCreation: "2023-09-30",
    description:
      "A thought-provoking surrealist masterpiece, this artwork portrays a fragmented human face dissolving into geometric shards. Each piece reflects different emotions, creating a sense of depth and psychological complexity. The contrast between the organic forms and sharp edges challenges the viewer’s perception of reality, prompting deep introspection. An evocative piece that explores the delicate balance between identity and transformation.",
    size: "34x34 inches",
    style: "Surrealism",
    price: "5800",
  },
  {
    id: "9",
    images: [
      "https://images.unsplash.com/photo-1512413914633-b5043f4041ea?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=1958&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1525690399065-b436c4100577?q=80&w=1960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1516791478406-b08b576971fb?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1607893378714-007fd47c8719?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    name: "Echoes of Time",
    artist: "Sophie Tran",
    artistId: "3",
    dateOfCreation: "2020-05-12",
    description:
      "A striking monochromatic composition that conveys the passage of time through layered textures and subtle gradations of gray. The interplay of light and shadow creates an almost sculptural effect, emphasizing the ephemeral nature of existence. This minimalist yet profound piece invites contemplation and a deeper appreciation of fleeting moments.",
    size: "24x48 inches",
    style: "Minimalism",
    price: "4000",
  },
  {
    id: "10",
    images: [
      "https://images.unsplash.com/photo-1516791478406-b08b576971fb?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=1958&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1525690399065-b436c4100577?q=80&w=1960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1512413914633-b5043f4041ea?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1607893378714-007fd47c8719?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    name: "Dancing Flames",
    artist: "Daniel Carter",
    artistId: "4",
    dateOfCreation: "2021-10-05",
    description:
      "A dynamic painting capturing the hypnotic motion of flames twisting and rising into the air. The warm tones of orange, red, and gold contrast sharply with the dark background, creating a striking visual impact. This piece embodies energy, passion, and the untamed force of nature, drawing viewers into the mesmerizing rhythm of fire.",
    size: "36x48 inches",
    style: "Abstract",
    price: "4500",
  },
  {
    id: "11",
    images: [
      "https://images.unsplash.com/photo-1607893378714-007fd47c8719?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=1958&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1525690399065-b436c4100577?q=80&w=1960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1512413914633-b5043f4041ea?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1516791478406-b08b576971fb?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    name: "Misty Reflections",
    artist: "Isabella Novak",
    artistId: "5",
    dateOfCreation: "2018-07-19",
    description:
      "A serene and poetic depiction of a mist-covered lake at dawn. The soft, blurred edges of the landscape create an atmosphere of quiet solitude, while the delicate play of light on the water’s surface evokes a sense of tranquility. A perfect harmony of soft tones and delicate brushwork, capturing the beauty of stillness and introspection.",
    size: "30x50 inches",
    style: "Impressionism",
    price: "2900",
  },
  {
    id: "12",
    images: [
      "https://images.unsplash.com/photo-1553949345-eb786bb3f7ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1607893378714-007fd47c8719?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=1958&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1525690399065-b436c4100577?q=80&w=1960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1516791478406-b08b576971fb?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    name: "The Forgotten Path",
    artist: "Ethan Rodriguez",
    artistId: "6",
    dateOfCreation: "2019-03-27",
    description:
      "An evocative painting of an overgrown, abandoned pathway leading into a dense forest. The rich earthy tones and intricate detailing of the foliage create a deeply immersive experience. The work captures the mystery and nostalgia of forgotten places, inviting the viewer to wander down the path and uncover its secrets.",
    size: "38x56 inches",
    style: "Realism",
    price: "1250",
  },
];

export const ARTISTS = [
  {
    id: "1",
    name: "Lena Vasquez",
    image:
      "https://images.unsplash.com/photo-1486413869840-a99ac0a4c031?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "A contemporary artist known for blending traditional Korean themes with modern digital techniques. His work explores identity and cultural evolution, often incorporating elements of ancient Korean calligraphy with futuristic digital landscapes. Kim Min-jun’s art seeks to bridge the gap between history and innovation, inviting viewers to reflect on the rapid changes in modern society while maintaining a strong connection to the past.",
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1614107070261-2aa1304618f6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Sophie Tran",
    description:
      "A visionary painter specializing in surrealism, capturing the subconscious mind through intricate dreamlike compositions and vibrant color palettes. Her works often feature distorted realities, floating landscapes, and mystical creatures, drawing inspiration from Eastern mythology and personal introspection. Park Ji-soo’s paintings transport viewers into an alternate world where emotions take form, challenging conventional perceptions of reality and imagination.",
  },
  {
    id: "3",
    image:
      "https://images.unsplash.com/photo-1626555019243-638888e7dc3a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Ethan Rodriguez",
    description:
      "An experimental artist whose abstract works use mixed media to challenge perceptions of space, texture, and movement. By incorporating unconventional materials such as metal, glass, and digital projections, he pushes the boundaries of traditional art. His innovative approach has gained international recognition, and his exhibitions often provide an interactive experience, encouraging audiences to engage with his pieces in a multisensory way.",
  },
  {
    id: "4",
    name: "Marco Lin",
    image:
      "https://images.unsplash.com/photo-1640622300363-4f295638be2e?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "A minimalist sculptor focusing on the harmony between nature and geometry, creating thought-provoking installations that evoke serenity. Her work explores the relationship between human-made structures and organic elements, often using materials like stone, wood, and glass to reflect the delicate balance between order and chaos. Choi’s sculptures have been featured in public spaces worldwide, blending seamlessly into their surroundings while inviting deep contemplation.",
  },
  {
    id: "5",
    image:
      "https://images.unsplash.com/photo-1597310502621-f807d2fca611?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Daniel Carter",
    description:
      "A dynamic illustrator and muralist whose street art combines bold colors, Korean folklore, and urban culture to tell compelling visual stories. Her murals can be found in major cities across the globe, each telling a unique narrative inspired by her heritage. Jung’s ability to merge traditional themes with contemporary street art techniques makes her work both culturally significant and visually striking, resonating with a diverse audience.",
  },
  {
    id: "6",
    image:
      "https://images.unsplash.com/photo-1630519047643-0b31f2540a1c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Isabella Novak",
    description:
      "A master of ink wash painting, merging classical Korean calligraphy with contemporary themes to create powerful, emotive works. His technique preserves the elegance of traditional brushwork while incorporating modern abstract forms, reflecting the evolving identity of Korean art. Yoon’s pieces are often deeply personal, conveying themes of solitude, resilience, and transformation, earning him recognition among collectors and art historians alike.",
  },
];

export const IMAGES = [
  "https://images.unsplash.com/photo-1515405295579-ba7b45403062?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?q=80&w=2066&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1646079498497-79c882f22251?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1661028105049-f4d2036774fa?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1531489956451-20957fab52f2?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1638064868404-45d13a8a3076?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];
