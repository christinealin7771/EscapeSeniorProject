using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Video;

public class MemePlayer : MonoBehaviour
{
    [SerializeField] public string videoFileName = "";
    // public VideoPlayer videoPlayer;
    // Start is called before the first frame update
    void Start()
    {
        PlayVideo();
    }

    // Update is called once per frame
    void Update()
    {

    }

    public void PlayVideo() {
        VideoPlayer videoPlayer = GetComponent<VideoPlayer>();

        if (videoPlayer) {
            string videoPath = System.IO.Path.Combine(Application.streamingAssetsPath, videoFileName);
            Debug.Log(videoPath);
            videoPlayer.url = videoPath;
            videoPlayer.Play();
        }
        videoPlayer.Play();
    }
}
