---
title: Home
sections:
  - type: hero_section
    title: Mega Ultra Studios
    subtitle: Let's Make It Weird
    content: >
      Mega Ultra Studios creates promotional videos for independent artists and
      small business
    actions:
      - label: All Projects
        url: /thank-you
        style: primary
        icon: arrow-right
        has_icon: true
        icon_position: right
    image: images/splash.jpg
    image_alt: Hero section placeholder image
    media_position: left
    media_width: fifty
    align: center
    padding_top: large
    padding_bottom: large
    background_color: primary
    background_image: images/Background.jpg
    background_image_repeat: no-repeat
    background_image_size: cover
    background_image_opacity: 80
    has_border: false
    video_embed_html: >-
      <iframe width="560" height="315"
      src="https://www.youtube-nocookie.com/embed/490aKBEbxEA?controls=0"
      title="YouTube video player" frameborder="0" allow="accelerometer;
      autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen></iframe>
    background_image_position: center top
  - type: blog_feed_section
    title: Latest Projects
    blog_feed_cols: three
    enable_cards: true
    show_recent: false
    recent_count: 6
    show_image: true
    show_date: false
    show_categories: true
    show_author: false
    show_excerpt: false
    align: center
    padding_top: medium
    padding_bottom: medium
    has_border: true
    background_color: none
    background_image: images/Diamond-Sunset.svg
    background_image_repeat: repeat
    background_image_size: auto
    background_image_opacity: 98
    category: src/data/categories/category-3p83s5vy6.json
  - type: grid_section
    title: Watch Mega Ultra Studios
    grid_items:
      - title: Amazon Prime
        title_align: center
        content_align: center
        actions:
          - label: Stream
            url: 'https://www.amazon.com/v/megaultra'
            style: primary
            has_icon: true
            icon: amazon
            icon_position: center
            new_window: true
        actions_align: center
        image: images/amazon-prime-seeklogo.com.svg
        image_alt: Amazon Prime icon
        image_position: top
        image_align: center
        image_has_padding: true
        image_width: fifty
      - title: YouTube
        title_align: center
        content_align: center
        actions:
          - label: Stream
            url: 'https://www.youtube.com/megaultrastudios'
            style: secondary
            has_icon: true
            icon: youtube
            icon_position: center
            new_window: true
        actions_align: center
        image_alt: YouTube icon
        image_position: top
        image_align: center
        image_has_padding: true
        image: images/modern-spider.svg
        actions_width: auto
      - title: Roku
        title_align: center
        content_align: center
        actions:
          - label: Stream
            url: >-
              https://channelstore.roku.com/details/61101b2967d58e2533e55f329a861eb4/mega-ultra-studios
            style: secondary
            has_icon: true
            icon: roku
            icon_position: center
        actions_align: center
        image_alt: Roku icon
        image_position: top
        image_align: center
        image_has_padding: true
        image: images/roku-seeklogo.com.svg
    grid_cols: three
    grid_gap_horiz: medium
    grid_gap_vert: medium
    enable_cards: true
    align: center
    padding_top: large
    padding_bottom: large
    has_border: false
    background_color: secondary
    background_image: images/Background 6.jpg
    background_image_repeat: no-repeat
    background_image_size: cover
    background_image_opacity: 65
    background_image_position: center top
    actions: []
  - type: grid_section
    title: Partners
    subtitle: 2021 Supporters
    align: center
    grid_items:
      - image: images/logo-1.svg
        image_alt: Stackbit logo
        image_align: center
      - image: images/logo-2.svg
        image_alt: Netlify logo
        image_align: center
      - image: images/logo-3.svg
        image_alt: Sticker Mule logo
        image_align: center
      - image: images/logo-4.svg
        image_alt: GitHub logo
        image_align: center
      - image: images/logo-5.svg
        image_alt: Gatsby logo
        image_align: center
      - image: images/logo-6.svg
        image_alt: Twilio logo
        image_align: center
      - image: images/logo-7.svg
        image_alt: Contentful logo
        image_align: center
      - image: images/logo-8.svg
        image_alt: Forestry logo
        image_align: center
    grid_cols: four
    grid_gap_horiz: medium
    grid_gap_vert: medium
    has_border: true
    background_color: none
  - type: form_section
    content: >-
      ## Ask A Question

      I'm OK with any kind of questions and will answer as many as I possibly
      can.
    content_align: left
    form_position: right
    form_width: fifty
    form_layout: inline
    enable_card: true
    form_id: contact-form
    form_action: /thank-you
    form_fields:
      - input_type: text
        name: name
        label: Name
        default_value: Your name
        is_required: true
      - input_type: email
        name: email
        label: Email
        default_value: Your email address
        is_required: true
      - input_type: textarea
        name: message
        label: Question
        default_value: Your question
      - input_type: checkbox
        name: consent
        label: >-
          I understand that this form is storing my submitted information so I
          can be contacted.
        is_required: true
    submit_label: Submit
    align_vert: top
    padding_top: medium
    padding_bottom: medium
    background_color: none
    background_image: images/pattern.svg
    background_image_repeat: repeat
    background_image_size: auto
    background_image_opacity: 98
seo:
  title: Mega Ultra Studios
  description: >-
    Mega Ultra Studios creates short and feature length films, music videos, and
    promotional videos for independent artists and small business. Let's Make it
    Weird.
  extra:
    - name: 'og:type'
      value: website
      keyName: property
    - name: 'og:title'
      value: Mega Ultra Studios
      keyName: property
    - name: 'og:description'
      value: >-
        Mega Ultra Studios creates promotional videos for independent artists
        and small business. Let's Make it Weird.
      keyName: property
    - name: 'og:image'
      value: /images/splash.jpg
      keyName: property
      relativeUrl: true
    - name: 'twitter:card'
      value: summary_large_image
    - name: 'twitter:title'
      value: Mega Ultra Studios
    - name: 'twitter:description'
      value: >-
        Mega Ultra Studios creates promotional videos for independent artists
        and small business. Let's Make it Weird.
    - name: 'twitter:image'
      value: /images/splash.jpg
      relativeUrl: true
template: advanced
---
