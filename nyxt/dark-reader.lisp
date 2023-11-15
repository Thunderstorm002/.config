;;; ~/.config/nyxt/dark-reader.lisp
(define-configuration nx-dark-reader:dark-reader-mode
    ;; Note the nxdr: short package prefix. It's for your convenience :)
    ((nxdr:selection-color "#5CCCCC")
     (nxdr:background-color "black")
     (nxdr:brightness 100)
     (nxdr:contrast 100)
     (nxdr:text-color "white")))

;; Add dark-reader to default modes
(define-configuration web-buffer
    ((default-modes `(nxdr:dark-reader-mode ,@%slot-value%))))


                                        ; Old code
                                        ;(in-package #:nyxt-user)
                                        ;
                                        ;(define-configuration nx-dark-reader:dark-reader-mode
                                        ;  ((nxdr:selection-color "#CD5C5C")
                                        ;   (nxdr:background-color "black")
                                        ;   (nxdr:text-color "white")
                                        ;   (nxdr:grayscale 50)
                                        ;   (nxdr:contrast 100)
                                        ;   (nxdr:brightness 100)))
                                        ;
                                        ;(define-configuration :web-buffer
                                        ;  ((default-modes `(nx-dark-reader:dark-reader-mode ,@%slot-value%))))
